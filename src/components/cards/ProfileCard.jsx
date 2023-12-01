import { Link } from "react-router-dom";
import { useLogout } from "../../api/auth/index.mjs";

function ProfileCard({ avatar, name, email, venueManager }) {
  return (
    <div className="container flex justify-center max-w-xl my-5 m-auto bg-light py-5 rounded-lg text-center">
      <div>
        <img
          src={avatar}
          alt=""
          className=" object-cover h-32 w-32 rounded-full m-auto"
        />

        <div className="my-5 flex flex-col gap-2">
          <div>
            <p>Welcome back</p>
            <h2 className="uppercase">{name}!</h2>
          </div>
          <p>{email}</p>
          <p>Admin access: {venueManager ? "Yes" : "No"}</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to="/avatar"
            className="block uppercase text-center font-medium bg-green hover:bg-greenHover  py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Change avatar
          </Link>
          {venueManager ? (
            <Link
              to="/admin"
              className="block uppercase font-medium text-center bg-blue hover:bg-blueHover hover:text-white py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
            >
              Admin
            </Link>
          ) : (
            ""
          )}

          <button
            onClick={useLogout}
            className="bg-red uppercase font-medium hover:bg-redHover hover:text-white py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
