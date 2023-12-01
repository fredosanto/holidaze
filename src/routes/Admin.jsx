import { Link } from "react-router-dom";
import { user } from "../api/auth/status";
import { API } from "../api/enpoints";
import { useFetchProfileVenues } from "../hooks/useFetchProfileVenues";
import { Venue } from "../components/cards/venue/Venue";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import { BackIcon, AddIcon } from "../components/icons/index.mjs";

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
    <div className="m-auto max-w-4xl">
      <div className="flex flex-col gap-5">
        <Link to="/profile" className="flex my-2">
          <BackIcon />
          Back to your venues
        </Link>
        <div>
          <h1 className="text-2xl text-center my-5">Admin Owned Avenues</h1>
          <p className=" text-center">
            Here is all the venues you own, from here you can manage and add new
            venues.
          </p>
        </div>
        <Link
          to="/add"
          className="flex uppercase font-medium bg-blue hover:bg-blueHover hover:text-white w-fit m-auto py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          <AddIcon />
          <p className="p-1">Add new venue</p>
        </Link>
        <hr className="my-5 text-grey" />
        <div className="md:m-10 grid gap-10 md:grid-cols-2 justify-center">
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
    </div>
  );
}
