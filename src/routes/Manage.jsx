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

  return (
    <div className="h-screen m-5">
      <h1 className="text-2xl">Manage Venue</h1>
      <p>Here you can manage your venue and see all bookings</p>
      <VenueManage venue={venue} />
      <Bookings venue={venue} />
      <Link to="/admin" className="underline">
        Go back to venues
      </Link>
    </div>
  );
}
