import { VenueActions } from "../components/cards/venue/Venue";
import { Venue } from "../components/cards/venue/Venue";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { API } from "../api/enpoints";

const api = API.venues.$;
const parameters =
  "?sort=created&sortOrder=desc&limit=10&_owner=true&_bookings=true";
const url = `${api + parameters}`;

function Venues() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getVenues() {
      try {
        setIsError(false);
        setIsLoading(true);

        const res = await fetch(url);
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
      {venues.map((venue) => (
        <VenueActions key={venue.id} venue={venue} />
      ))}
    </div>
  );
}

export default Venues;
