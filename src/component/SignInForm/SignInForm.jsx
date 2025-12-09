import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../formInput/formInput";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { SignUpContainer, ButtonsContainer } from "./SignInForm.style";
import { USER_ACTION_TYPES } from "../../store/user/user.types";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
      payload: { email, password },
    });

    resetFormFields();
  };

  const signInWithGoogle = () => {
    dispatch({ type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START });
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
