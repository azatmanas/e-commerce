import { useSelector } from "react-redux";
import SignInForm from "../../SignInForm/SignInForm";
import SignUpForm from "../../SignUpForm/SignUpForm";
import { AuthenticationContainer } from "./Authentication.style";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/", { replace: true });
    }
  }, [currentUser, navigate]);
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
