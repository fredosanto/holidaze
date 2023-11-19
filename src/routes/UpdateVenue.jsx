import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleVenue } from "../api/venues/getSingleVenue";
import { UpdateForm } from "../components/admin/UpdateForm";
import ErrorPage from "./ErrorPage";
import Loading from "../components/Loading";

export function UpdateVenue() {
  const [singleVenue, setSingleVenue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { venueId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await getSingleVenue(venueId);
        setSingleVenue(data);

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

  return (
    <div>
      <h1>Update Venue</h1>
      <UpdateForm venue={singleVenue} venueId={venueId} />
      <Link to="/profile">Go back to profile</Link>
    </div>
  );
}
