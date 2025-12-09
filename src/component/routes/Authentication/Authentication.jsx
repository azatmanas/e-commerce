import SignInForm from "../../SignInForm/SignInForm";
import SignUpForm from "../../SignUpForm/SignUpForm";
import { AuthenticationContainer } from "./Authentication.style";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
