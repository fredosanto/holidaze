import { Link } from "react-router-dom";
import ProfileCard from "../components/cards/ProfileCard";

function Profile() {
  const userJSON = localStorage.getItem("user");
  const user = userJSON ? JSON.parse(userJSON) : null;

  return (
    <div className="h-screen">
      <h1>Profile</h1>
      {user ? (
        <ProfileCard
          avatar={user.avatar}
          name={user.name}
          email={user.email}
          venueManager={user.venueManager}
        />
      ) : null}
      <div>
        <h2>Owned Avenues</h2>
        <Link
          to="/add"
          className="bg-blue bg hover:bg-blueHover w-1/2 py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Add new venue
        </Link>
      </div>
    </div>
  );
}

export default Profile;
