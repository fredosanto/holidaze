import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API } from "../api/enpoints";
import { useFetch } from "../hooks/useFetch";
import { VenueManage } from "../components/admin/VenueManage";
import { Bookings } from "../components/admin/Bookings";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

export function Manage() {
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
