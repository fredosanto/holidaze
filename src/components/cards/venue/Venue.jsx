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
      <b>Location:</b> {location.country}, {location.city}
    </p>
  );
};

const Price = ({ price }) => {
  return (
    <div>
      <b className="text-sm">Price per night: </b>
      <h1 className="text-lg">{price}NOK</h1>
    </div>
  );
};

export const Venue = ({ venue, user, owner, reservationId }) => {
  return (
    <div className="sm:w-3/4 md:w-1/2">
      <div className="bg-light rounded-lg">
        <VenueImage
          image={venue?.media}
          name={venue.name}
          maxGuests={venue.maxGuests}
        />
        <h2>{venue.name}</h2>
        <Location location={venue?.location} />
        <Price price={venue.price} />
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
        <Link
          to={`/venue/${venueId}`}
          className="bg-red w-1/2 py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          View venue
        </Link>
      );
    }
    if (owner) {
      return (
        <div className="flex justify-around">
          <Link
            to={`/manage/${venueId}`}
            className="w-1/3 bg-green hover:bg-greenHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl text-center"
          >
            Manage
          </Link>
          <button
            onClick={() => deleteItem(deleteVenueUrl)}
            className="w-1/3 bg-red hover:bg-redHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Delete
          </button>
        </div>
      );
    }
    return (
      <div className="flex justify-around">
        <button className=" bg-green hover:bg-greenHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl">
          Update booking
        </button>
        <button
          onClick={() => deleteItem(deleteBookingUrl)}
          className="bg-red py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
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
