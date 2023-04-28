import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Spinner from "./component/spinner/spinner";
import { checkUserSession } from "./store/user/user.action";
import { GlobalStyle } from "./global.style";

const Shop = lazy(() => import("./component/routes/shop/shop"));
const Checkout = lazy(() => import("./component/routes/checkout/checkout"));

const Navigation = lazy(() =>
  import("./component/routes/navigation/navigation")
);
const Authentication = lazy(() =>
  import("./component/routes/Authentication/Authentication")
);
const Home = lazy(() => import("./component/routes/home"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
