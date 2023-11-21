import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import ErrorPage from "./ErrorPage";
import Loading from "../components/Loading";
import { SingleVenue } from "../components/cards/singleVenue/SingleVenue";
import { API } from "../api/enpoints";

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
    <div className="m-10">
      <div
        className="flex h-72 bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${venue.media?.[0]})` }}
      >
        <div className="m-auto bg-black p-5 bg-opacity-80 rounded-lg">
          <h1 className=" text-white bg-opacity-100 text-center w-auto text-lg">
            Welcome to amazing {venue.name}
          </h1>
        </div>
      </div>
      <SingleVenue venue={venue} />
    </div>
  );
}
