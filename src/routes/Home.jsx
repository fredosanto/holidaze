import { VenueActions } from "../components/cards/Venue";
// import getVenues from "../api/venues/getVenues";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";

const url = "https://api.noroff.dev/api/v1/holidaze/venues";
const endpoint =
  "?sort=created&sortOrder=desc&limit=10&_owner=true&_bookings=true";
const link = url + endpoint;
// const venues = await getVenues(link);

function Home() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getVenues() {
      try {
        setIsError(false);
        setIsLoading(true);

        const res = await fetch(link);
        const data = await res.json();
        setVenues(data);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getVenues();
  }, []);

  console.log(venues);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div>
      {/* <h1 className="text-4xl font-extrabold">Hi im the h1</h1>
      <h2 className="text-2xl font-bold">Hi im the h2</h2>
      <h3 className="text-lg font-bold">This is the h3</h3>
      <p className="text-base font-normal">This is the paragraph</p>
      <p className="text-base font-medium">This is the medium paragrah</p> */}
      {venues.map((venue) => (
        <VenueActions key={venue.id} venue={venue} />
      ))}
    </div>
  );
}

export default Home;
