import { Link } from "react-router-dom";
import useLogout from "../../api/auth/useLogout";

function ProfileCard({ avatar, name, email, venueManager }) {
  return (
    <div className="container flex justify-center w-1/2 m-auto bg-light py-5 rounded-lg text-center">
      <div>
        <img
          src={avatar}
          alt=""
          className=" object-cover h-32 w-32 rounded-full m-auto"
        />
        <Link to="/avatar" className="underline">
          Change avatar
        </Link>
        <div className="my-5">
          <h2>{name}</h2>
          <p>{email}</p>
          <p>Manager access: {venueManager ? "Yes" : "No"}</p>
        </div>
        <button
          onClick={useLogout}
          className="bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
