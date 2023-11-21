import { Venue } from "../components/cards/venue/Venue";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
import { API } from "../api/enpoints";
import ErrorPage from "./ErrorPage";

function Venues() {
  const urlParameters =
    "?sort=created&sortOrder=desc&limit=10&_owner=true&_bookings=true";
  const url = `${API.venues.$ + urlParameters}`;
  const { data: venues, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage errorMessage={error} />;
    // return alert(error);
  }

  return (
    <div className="m-10">
      <div className="bg-grey p-10">
        <h2>Search for venue</h2>
        <input
          type="search"
          placeholder="Search name, city, country"
          className="p-2 w-1/2"
        />
      </div>
      {venues.map((venue) => (
        <Venue key={venue.id} venue={venue} />
      ))}
    </div>
  );
}

export default Venues;
