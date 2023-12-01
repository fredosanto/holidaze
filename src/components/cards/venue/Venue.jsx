import { Link } from "react-router-dom";
import VenueImage from "./VenueImage";
import { API } from "../../../api/enpoints";
import { deleteItem } from "../../../api/token/delete";

const Location = ({ location }) => {
  if (!location?.country ?? !location?.city) {
    return null;
  }

  return (
    <p>
      Location: {location.country}, {location.city}
    </p>
  );
};

const Price = ({ price }) => {
  return (
    <div>
      <b className="text-sm">Price per night: </b>
      <p className="text-lg uppercase font-bold">{price} NOK</p>
    </div>
  );
};

export const Venue = ({ venue, user, owner, reservationId }) => {
  return (
    <div className="">
      <div className="bg-light rounded-lg">
        <Link to={`/venue/${venue.id}`}>
          <VenueImage
            image={venue?.media}
            name={venue.name}
            maxGuests={venue.maxGuests}
          />
          <h2>{venue.name ? venue.name : "Venue name not added yet"}</h2>
          <Location location={venue?.location} />
          <Price price={venue.price} />
        </Link>
      </div>
      <VenueActions
        user={user}
        venueId={venue.id}
        owner={owner}
        reservationId={reservationId}
      />
    </div>
  );
};

export const VenueActions = ({ user, venueId, owner, reservationId }) => {
  const deleteVenueUrl = API.venues.id(venueId).$;
  const deleteBookingUrl = API.bookings.id(reservationId).$;

  const Controls = () => {
    if (!user) {
      return (
        <div>
          <Link
            to={`/venue/${venueId}`}
            className="block my-5 text-center uppercase font-medium bg-red hover:bg-redHover hover:text-white py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            View venue
          </Link>
        </div>
      );
    }
    if (owner) {
      return (
        <div className="flex justify-around">
          <Link
            to={`/manage/${venueId}`}
            className="w-1/3 uppercase font-medium bg-green hover:bg-greenHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl text-center"
          >
            Manage
          </Link>
          <button
            onClick={() => deleteItem(deleteVenueUrl)}
            className="w-1/3 uppercase font-medium bg-red hover:bg-redHover hover:text-white py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Delete
          </button>
        </div>
      );
    }
    return (
      <div className="flex justify-around gap-5 my-2">
        <Link
          to={`/reservation/${reservationId}`}
          className=" block w-1/2 text-center uppercase font-medium bg-green hover:bg-greenHover py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Update booking
        </Link>
        <button
          onClick={() => deleteItem(deleteBookingUrl)}
          className="block w-1/2 text-center uppercase font-medium bg-red hover:bg-redHover hover:text-white py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Cancel
        </button>
      </div>
    );
  };
  return (
    <div>
      <Controls />
    </div>
  );
};
