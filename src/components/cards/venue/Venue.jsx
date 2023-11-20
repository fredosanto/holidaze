import { Link } from "react-router-dom";
import VenueImage from "./VenueImage";

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
      <b className="text-sm">Price: </b>
      <h1 className="text-lg">{price}</h1>
    </div>
  );
};

export const Venue = ({ venue, user }) => {
  return (
    <div className="my-10 mx-2 sm:w-3/4 md:w-1/2">
      <div className="bg-light">
        <VenueImage
          image={venue?.media}
          name={venue.name}
          maxGuests={venue.maxGuests}
        />
        <h2>{venue.name}</h2>
        <Location location={venue?.location} />
        <Price price={venue.price} />
      </div>
      <VenueActions user={user} venueId={venue.id} />
    </div>
  );
};

export const VenueActions = ({ user, venueId }) => {
  const Controls = () => {
    if (!user) {
      return (
        <Link
          // to={`/venue/${venueId}`}
          to={`/venue/${venueId}`}
          className="bg-red w-1/2 py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          View venue
        </Link>
      );
    }
    if (user.venueManager) {
      return (
        <div className="flex justify-around">
          <Link
            to={`/manage/${venueId}`}
            className="w-1/3 bg-green hover:bg-greenHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl text-center"
          >
            Manage
          </Link>
          <button className="w-1/3 bg-red hover:bg-redHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl">
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
        <button className="bg-red py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl">
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
