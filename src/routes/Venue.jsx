import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getSingleVenue } from "../api/venues/getSingleVenue";
import ErrorPage from "./ErrorPage";
import Loading from "../components/Loading";
import { SingleVenue } from "../components/cards/singleVenue/SingleVenue";

export function Venue() {
  const { venueId } = useParams();
  const [venue, setVenue] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
    <div className="m-10">
      <div
        className="flex h-72 bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${venue.media?.[0]})` }}
      >
        <div className="m-auto bg-black p-5 bg-opacity-80 rounded-lg">
          <h1 className=" text-white bg-opacity-100 text-center w-auto text-lg">
            Welcome to amazing {venue.name}
          </h1>
        </div>
      </div>
      <SingleVenue venue={venue} />
    </div>
  );
}
