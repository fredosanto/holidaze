import { Venue } from "../components/cards/venue/Venue";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getVenues } from "../api/venues/getVenues";
import ErrorPage from "./ErrorPage";

function Venues() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function extractVenues() {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await getVenues();
        setVenues(data);
        console.log(data);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
        console.log("runned into error");
      }
    }
    extractVenues();
  }, []);

  // console.log(venues);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div>
      {venues.map((venue) => (
        <Venue key={venue.id} venue={venue} />
      ))}
    </div>
  );
}

export default Venues;
