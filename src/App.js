import { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./store/user/user.selector";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./component/routes/ProtectedRoute/ProtectedRoute";
import Spinner from "./component/spinner/spinner";
import { checkUserSession } from "./store/user/user.action";
import { GlobalStyle } from "./global.style";
import { Home, Shop, Checkout, Navigation, Authentication } from "./lazy";
import Profile from "./component/profile/profile";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser); // ✅ fixed casing

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />

          <Route
            path="checkout"
            element={
              <ProtectedRoute user={currentUser}>
                <Checkout />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute user={currentUser}>
                <Profile />{" "}
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
