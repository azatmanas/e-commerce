require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // CORS headers for browser requests
  const headers = {
    "Access-Control-Allow-Origin": "*", // Restrict in production!
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { amount } = JSON.parse(event.body || "{}");

    // Validate amount
    if (!amount || typeof amount !== "number" || amount < 50) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: "Invalid amount. Must be at least 50 (0.50 USD).",
        }),
      };
    }

    // Optional: Validate other fields (e.g. currency, metadata)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Ensure integer cents
      currency: "usd",
      payment_method_types: ["card"],
      // Add metadata for debugging/auditing
      metadata: {
        source: "netlify-function",
        timestamp: new Date().toISOString(),
      },
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        // Only return what the frontend needs!
      }),
    };
  } catch (error) {
    console.error("Stripe error:", error);

    // Don't expose raw error to client
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Payment processing failed. Please try again.",
      }),
    };
  }
};
