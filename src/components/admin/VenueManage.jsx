import { Link } from "react-router-dom";
import VenueImage from "../cards/venue/VenueImage";

export function VenueManage({ venue }) {
  return (
    <div className="my-10 mx-2 sm:w-3/4 md:w-1/2">
      <div className="">
        <VenueImage
          image={venue?.media}
          name={venue.name}
          maxGuests={venue.maxGuests}
        />
        <h2>{venue.name}</h2>
        <p>
          <b>Location:</b> {venue.location?.address}
        </p>
      </div>
      <Link
        to={`/update/${venue.id}`}
        className="block w-1/3 my-2 mx-auto py-4 px-2 bg-blue hover:bg-blueHover rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl text-center"
      >
        Update Venue
      </Link>
    </div>
  );
}
