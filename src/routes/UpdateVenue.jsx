import { Link, useParams } from "react-router-dom";
import { API } from "../api/enpoints";
import { useFetch } from "../hooks/useFetch";
import { UpdateForm } from "../components/admin/UpdateForm";
import ErrorPage from "./ErrorPage";
import Loading from "../components/Loading";
import { BackIcon } from "../components/icons/index.mjs";

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
    <div className="max-w-4xl m-auto">
      <Link to="/profile" className="flex my-2">
        <BackIcon />
        Back to your venues
      </Link>
      <div className="flex flex-col items-center my-10 gap-5">
        <h1 className="text-2xl">Update Venue</h1>
        <UpdateForm venue={venue} venueId={venueId} />
      </div>
    </div>
  );
}
