import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Loading from "../components/Loading";
import { SingleVenue } from "../components/cards/singleVenue/SingleVenue";
import { API } from "../api/enpoints";
import { BackIcon } from "../components/icons/index.mjs";

export function Venue() {
  const { venueId } = useParams();
  const urlParameters = "?_owner=true&_bookings=true";
  const url = `${API.venues.id(venueId).$ + urlParameters}`;
  const { data: venue, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <ErrorPage />;
  }

  console.log(venue);

  return (
    <>
      <Link to="/venues" className="flex my-2">
        <BackIcon />
        Back to venues
      </Link>
      <div className="my-5">
        <header
          className="flex h-96 w-screen bg-cover bg-no-repeat bg p-5"
          style={{ backgroundImage: `url(${venue.media?.[0]})` }}
        >
          <div className="m-auto bg-black p-10 bg-opacity-80 rounded-lg">
            <p className=" text-white bg-opacity-100 text-center w-auto text-xl max-w-lg uppercase font-bold">
              Welcome to amazing {venue.name}
            </p>
          </div>
        </header>
        <div className=" flex flex-col my-5 gap-5 m-auto p-2 md:max-w-4xl">
          <SingleVenue venue={venue} />
        </div>
      </div>
    </>
  );
}
