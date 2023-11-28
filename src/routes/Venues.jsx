import { Venue } from "../components/cards/venue/Venue";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import { useFetch } from "../hooks/useFetch";
import { API } from "../api/enpoints";
import { Typeahead } from "../components/Typeahead";

function Venues() {
  const urlParameters =
    "?sort=created&sortOrder=desc&limit=10&_owner=true&_bookings=true";
  const url = `${API.venues.$ + urlParameters}`;
  const { data: venues, isLoading, error } = useFetch(url);

  const image =
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage errorMessage={error} />;
    // return alert(error);
  }

  return (
    <>
      <header
        className="flex h-screen bg-cover bg-no-repeat bg p-5"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="m-auto bg-black p-10 bg-opacity-80 rounded-lg">
          <h1 className=" text-white bg-opacity-100 text-center w-auto text-xl max-w-lg">
            We have the perfect venue for everyone! Book a venue today!
          </h1>
        </div>
      </header>
      <div className="my-10 m-auto max-w-7xl">
        <div className="bg-grey p-5 py-10 my-10 m-auto md:rounded-lg w-full sm:max-w-xl">
          <h2 className="text-center mb-5">Search for venue</h2>
          <Typeahead />
        </div>
        <h1 className="my-10 text-center md:m-10 md:text-left">
          Choose your venue
        </h1>
        <div className="md:m-10 grid gap-10 md:grid-cols-2 justify-center">
          {venues.map((venue) => (
            <Venue key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Venues;
