import VenueImage from "./VenueImage";

const Location = ({ location }) => {
  if (!location.country ?? !location.city) {
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

export const Venue = ({ maxGuests, media, name, location, price }) => {
  return (
    <div>
      <VenueImage image={media[0]} name={name} maxGuests={maxGuests} />
      <h2>{name}</h2>
      <Location location={location} />
      <Price price={price} />
    </div>
  );
};

export const VenueActions = ({ venue, user }) => {
  const Controls = () => {
    if (!user) {
      return <button className="bg-blue">View venue</button>;
    }
    if (user.venueManager) {
      return (
        <>
          <button className="bg-blue">Update booking</button>
          <button className="bg-red">Cencel</button>
        </>
      );
    }
    return (
      <>
        <button className="bg-blue">Manage</button>
        <button className="bg-red">Delete</button>
      </>
    );
  };
  return (
    <div className="my-10">
      <Venue {...venue} />
      <Controls />
    </div>
  );
};
