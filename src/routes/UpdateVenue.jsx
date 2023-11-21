import { Link, useParams } from "react-router-dom";
import { API } from "../api/enpoints";
import { useFetch } from "../hooks/useFetch";
import { UpdateForm } from "../components/admin/UpdateForm";
import ErrorPage from "./ErrorPage";
import Loading from "../components/Loading";

export function UpdateVenue() {
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
    <div>
      <h1>Update Venue</h1>
      <UpdateForm venue={venue} venueId={venueId} />
      <Link to="/profile">Go back to profile</Link>
    </div>
  );
}
