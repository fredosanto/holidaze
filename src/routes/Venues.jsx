import { Venue } from "../components/cards/venue/Venue";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import { useFetch } from "../hooks/useFetch";
import { API } from "../api/enpoints";
import { Typeahead } from "../components/Typeahead";
import { useState } from "react";
import headerBackground from "../../public/roberto-nickson-emqnSQwQQDo-unsplash.jpg";
import { HeaderImage } from "../components/layout/components/HeaderImage";

function Venues() {
  const headerContent =
    "We have the perfect venue for everyone! Book a venue today!";
  const [pagination, setPagination] = useState(10);
  const urlParameters = `?sort=created&sortOrder=desc&limit=${pagination}&_owner=true&_bookings=true`;
  const url = `${API.venues.$ + urlParameters}`;
  const { data: venues, isLoading, error } = useFetch(url);

  function handlePagination() {
    setPagination(pagination + 10);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage errorMessage={error} />;
    // return alert(error);
  }

  return (
    <>
      <HeaderImage image={headerBackground} content={headerContent} />
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
        <button
          onClick={() => handlePagination()}
          className="block mx-auto bg-green hover:bg-greenHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          View more venues
        </button>
      </div>
    </>
  );
}

export default Venues;
