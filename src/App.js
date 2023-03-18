import { Routes, Route } from "react-router-dom";

import Home from "./component/routes/home";
import Navigation from "./component/routes/navigation/navigation";
import Authentication from "./component/routes/Authentication/Authentication";
import Shop from "./component/routes/shop/shop";
import Checkout from "./component/routes/checkout/checkout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
