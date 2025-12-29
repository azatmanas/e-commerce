import { useDispatch } from "react-redux";
import FormInput from "../formInput/formInput";
import Button from "../button/button";
import { SignInContainer, ButtonsContainer } from "./SignUpForm.style";
import { USER_ACTION_TYPES } from "../../store/user/user.types";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { values, handleChange, isValid, errors, resetForm } =
    useFormAndValidation();

  const {
    displayName = "",
    email = "",
    password = "",
    confirmPassword = "",
  } = values;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) return;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    dispatch({
      type: USER_ACTION_TYPES.SIGN_UP_START,
      payload: { email, password, displayName },
    });

    resetForm();
  };

  return (
    <SignInContainer>
      <ModalWithForm
        title="Don't have an account?"
        subtitle="Sign up with your email and password"
        onSubmit={handleSubmit}
      >
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        {errors.displayName && (
          <span className="error-message">{errors.displayName}</span>
        )}
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <FormInput
          label="Password"
          type="password"
          minLenght="6"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          minLenght="6"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        {errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}

        <ButtonsContainer>
          <Button type="submit" disabled={!isValid}>
            Sign Up
          </Button>
        </ButtonsContainer>
      </ModalWithForm>
    </SignInContainer>
  );
};

export default SignUpForm;
