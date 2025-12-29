import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectCurrentUser } from "../../store/user/user.selector";
import { ProfileInfo } from "./profile.style";
import FormInput from "../formInput/formInput";
import Button from "../button/button";

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [formValues, setFormValues] = useState({
    displayName: "",
    email: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormValues({
        displayName: currentUser.displayName || "",
        email: currentUser.email || "",
      });
    }
  }, [currentUser]);
  if (!currentUser) {
    return <p>Please sign in to view your profile.</p>;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfileStart(formValues));
  };
  return (
    <ProfileInfo>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          name="displayName"
          value={formValues.displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <Button type="submit">Update Profile</Button>
      </form>
    </ProfileInfo>
  );
};

export default Profile;
