import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API } from "../api/enpoints";
import { useFetch } from "../hooks/useFetch";
import { VenueManage } from "../components/admin/VenueManage";
import { Bookings } from "../components/admin/Bookings";
import { BackIcon } from "../components/icons/index.mjs";
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
    <div className="max-w-4xl m-auto">
      <Link to="/admin" className="flex my-2">
        <BackIcon />
        Back to your venues
      </Link>
      <div className="flex flex-col items-center my-10 gap-5">
        <div>
          <h1 className="text-2xl text-center">Manage Venue</h1>
          <p className="text-center">
            Here you can manage your venue and see all bookings
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <VenueManage venue={venue} />
          </div>
          <div>
            <Bookings venue={venue} />
          </div>
        </div>
      </div>
    </div>
  );
}
