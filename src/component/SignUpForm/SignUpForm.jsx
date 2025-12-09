import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../formInput/formInput";
import Button from "../button/button";
import { SignInContainer, ButtonsContainer } from "./SignUpForm.style";
import { USER_ACTION_TYPES } from "../../store/user/user.types";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    dispatch({
      type: USER_ACTION_TYPES.SIGN_UP_START,
      payload: { email, password, displayName },
    });

    resetFormFields();
  };

  return (
    <SignInContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <ButtonsContainer>
          <Button type="submit">Sign Up</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignUpForm;
