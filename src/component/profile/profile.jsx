import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  if (!currentUser) {
    return <p>Please sign in to view your profile.</p>;
  }
  return (
    <section>
      <h2>Profile</h2>
      <p>
        <strong>Name</strong>
        {currentUser.displayName}
      </p>
      <p>
        <strong>Email</strong>
        {currentUser.email}
      </p>
    </section>
  );
};

export default Profile;
