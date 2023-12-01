import { Link } from "react-router-dom";
import VenueImage from "../cards/venue/VenueImage";
import { EditIcon } from "../icons/index.mjs";

export function VenueManage({ venue }) {
  return (
    <div className="flex flex-col gap-5 bg-light p-5 rounded-xl">
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
        className="flex uppercase font-medium bg-blue hover:bg-blueHover hover:text-white w-fit m-auto py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
      >
        <EditIcon />
        <p className="p-1">Update venues</p>
      </Link>
    </div>
  );
}
