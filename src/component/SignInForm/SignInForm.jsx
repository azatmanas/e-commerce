import { useDispatch } from "react-redux";
import FormInput from "../formInput/formInput";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { SignUpContainer, ButtonsContainer } from "./SignInForm.style";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignInForm = () => {
  const dispatch = useDispatch();

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const { email = "", password = "" } = values;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    dispatch(emailSignInStart(email, password));
    resetForm();
  };

  return (
    <SignUpContainer>
      <ModalWithForm
        title="Already have an account?"
        subtitle="Sign in with your email and password"
        onSubmit={handleSubmit}
      >
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
          error={errors.email}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
          error={errors.password}
        />
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}

        <ButtonsContainer>
          <Button type="submit" disabled={!isValid}>
            Sign In
          </Button>

          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={() => dispatch(googleSignInStart())}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </ModalWithForm>
    </SignUpContainer>
  );
};

export default SignInForm;
