import { Link } from "react-router-dom";
import VenueImage from "../cards/venue/VenueImage";

export function VenueManage({ venue }) {
  return (
    <div className="my-10 mx-2 sm:w-3/4 md:w-1/2">
      <div className="bg-light">
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
        className="w-1/3 bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl text-center"
      >
        Update Venue
      </Link>
    </div>
  );
}
