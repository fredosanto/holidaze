import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleVenue } from "../api/venues/getSingleVenue";
import { VenueManage } from "../components/admin/VenueManage";
import { Bookings } from "../components/admin/Bookings";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

export function Manage() {
  const [venue, setVenue] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  let { venueId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await getSingleVenue(venueId);
        setVenue(data);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  console.log(venue);
  return (
    <div className="h-screen">
      <h1>Manage Venue</h1>
      <h2>{venue.name}</h2>
      <p>Here you can manage your venue and see all bookings</p>
      <VenueManage venue={venue} />
      <Bookings venueBookings={venue.bookings} />
      <Link to="/profile" className="underline">
        Go back to profile
      </Link>
    </div>
  );
}
