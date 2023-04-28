import SignUp from "../../signup/signup";
import SignForm from "../../signForm/signForm";
import { AuthenticationContainer } from "./Authentication.style";
const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignForm />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
