import { Venue } from "../components/cards/venue/Venue";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getVenues } from "../api/venues/getVenues";
import { API } from "../api/enpoints";
import ErrorPage from "./ErrorPage";

function Venues() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function extractVenues() {
      const parameters =
        "?sort=created&sortOrder=desc&limit=10&_owner=true&_bookings=true";
      const url = `${API.venues.$ + parameters}`;
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await getVenues(url);
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
