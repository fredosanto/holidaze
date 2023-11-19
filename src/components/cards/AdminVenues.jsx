import { Link } from "react-router-dom";
import { user } from "../../api/auth/status";
import { Venue } from "./venue/Venue";

export function AdminVenues({ venues }) {
  const userProfile = user();
  return (
    <div className="flex flex-col mx-2">
      <h2>Owned Avenues</h2>
      <div className="my-5">
        <Link
          to="/add"
          className="bg-blue hover:bg-blueHover w-1/2 py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Add new venue
        </Link>
        {venues.map((venue) => (
          <Venue key={venue.id} venue={venue} user={userProfile} />
        ))}
      </div>
    </div>
  );
}
