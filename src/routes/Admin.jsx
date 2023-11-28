import { Link } from "react-router-dom";
import { user } from "../api/auth/status";
import { API } from "../api/enpoints";
import { useFetchProfileVenues } from "../hooks/useFetchProfileVenues";
import { Venue } from "../components/cards/venue/Venue";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

export function Admin() {
  const userProfile = user();
  const url = `${API.profiles.name(userProfile.name).venues}?_owner=true`;
  const { data: venues, isLoading, error } = useFetchProfileVenues(url);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <ErrorPage />;
  }

  // console.log(userProfile);
  // console.log(venues);
  // const adminPanel = venues.map(
  //   (venue) => venue?.owner?.name === userProfile.name
  // );
  // console.log(adminPanel);

  return (
    <div className="flex flex-col mx-2">
      <Link to="/profile" className="underline">
        Go back to profile
      </Link>
      <h2>Owned Avenues</h2>
      <div className="my-5">
        <Link
          to="/add"
          className="bg-blue hover:bg-blueHover w-1/2 py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Add new venue
        </Link>
        {venues.map((venue) => (
          <Venue
            key={venue.id}
            venue={venue}
            user={userProfile}
            owner={venue?.owner?.name === userProfile.name}
          />
        ))}
      </div>
    </div>
  );
}
