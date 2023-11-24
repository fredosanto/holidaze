import { Link } from "react-router-dom";
import { isOnline } from "../../../api/auth/status";

function Services({ maxGuests, wifi, parking, breakfast, pets }) {
  return (
    <div>
      <p>{maxGuests} guests</p>
      <p>Wifi: {wifi ? "included" : "not included"}</p>
      <p>Parking: {parking ? "included" : "not included"}</p>
      <p>Breakfast: {breakfast ? "included" : "not included"}</p>
      <p>{pets ? "Pet friendly" : "No pets allowed"}</p>
    </div>
  );
}

function VenueMedia({ image, alt }) {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
}

export function SingleVenue({ venue }) {
  const userStatus = isOnline();
  return (
    <>
      <div className="flex flex-col">
        <h2>{venue.name}</h2>
        <div>
          {venue.location?.city}, {venue.location?.country}
        </div>
        <p>{venue.description}</p>
        <div className="flex justify-between">
          <div>
            <p>Price per night</p>
            <p>{venue.price}</p>
          </div>
          <div>
            <p>Rating</p>
            <p>{venue.rating}</p>
            <p>{venue.meta?.breakfast}</p>
          </div>
        </div>
        {userStatus ? (
          <Link
            to={`/booking/${venue.id}`}
            className=" bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Check available dates
          </Link>
        ) : (
          <Link
            to={`/login`}
            className=" bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Login to book dates
          </Link>
        )}
        {/* <Link
          to={`/booking/${venue.id}`}
          className=" bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Check available dates
        </Link> */}
      </div>
      <Services
        maxGuests={venue.maxGuests}
        wifi={venue.meta?.wifi}
        parking={venue.meta?.parking}
        breakfast={venue.meta?.breakfast}
        pets={venue.meta?.pets}
      />
      <div className="flex flex-col gap-5">
        {venue.media.length >= 0 ? (
          venue.media.map((image, index) => (
            <VenueMedia key={index} image={image} alt={venue.name} />
          ))
        ) : (
          <div>No images available</div>
        )}
        {/* // <img src={venue.media} alt={venue.name} /> */}
      </div>
    </>
  );
}
