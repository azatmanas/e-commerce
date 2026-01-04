import { lazy } from "react";
export const Home = lazy(() => import("./component/routes/home"));
export const Shop = lazy(() => import("./component/routes/shop/shop"));
export const Checkout = lazy(() =>
  import("./component/routes/checkout/checkout")
);
export const Navigation = lazy(() =>
  import("./component/routes/navigation/navigation")
);
export const Authentication = lazy(() =>
  import("./component/routes/Authentication/Authentication")
);
