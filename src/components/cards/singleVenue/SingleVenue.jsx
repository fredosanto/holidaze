import { Link } from "react-router-dom";
import { isOnline } from "../../../api/auth/status";
// import { CarIcon } from "../../icons/CarIcon";
import {
  BankCardIcon,
  CalendarIcon,
  CarIcon,
  CupIcon,
  GlobeIcon,
  GroupIcon,
  InfoIcon,
  MailIcon,
  PawIcon,
  ProfileIcon,
  StarIcon,
  WifiIcon,
} from "../../icons/index.mjs";

function Intro({ venue }) {
  return (
    <>
      <div>
        <h1>{venue.name}</h1>
        <div className="flex">
          <GlobeIcon />
          <p>
            {venue.location?.city}, {venue.location?.country}
          </p>
        </div>
      </div>
      <p>{venue.description}</p>
      <div className="flex justify-between">
        <div>
          <p>Price per night</p>
          <div className="flex">
            <BankCardIcon />
            <p>{venue.price}</p>
          </div>
        </div>
        <div>
          <p>Rating</p>
          <StarIcon />
          <p>{venue.rating}</p>
          <p>{venue.meta?.breakfast}</p>
        </div>
      </div>
    </>
  );
}

function ActionButton({ id }) {
  const userStatus = isOnline();
  return (
    <>
      {userStatus ? (
        <Link
          to={`/booking/${id}`}
          className=" flex bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          <CalendarIcon />
          <p>Check available dates</p>
        </Link>
      ) : (
        <Link
          to={`/login`}
          className=" bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Login to book dates
        </Link>
      )}
    </>
  );
}

function Services({ maxGuests, wifi, parking, breakfast, pets }) {
  return (
    <div>
      <div className="flex">
        <InfoIcon />
        <h3>Services</h3>
      </div>
      <div className="flex">
        <GroupIcon />
        <p>{maxGuests} guests</p>
      </div>
      <div className="flex">
        <WifiIcon />
        <p>Wifi: {wifi ? "included" : "not included"}</p>
      </div>
      <div className="flex">
        <CarIcon />
        <p>Parking: {parking ? "included" : "not included"}</p>
      </div>
      <div className="flex">
        <CupIcon />
        <p>Breakfast: {breakfast ? "included" : "not included"}</p>
      </div>
      <div className="flex">
        <PawIcon />
        <p>{pets ? "Pet friendly" : "No pets allowed"}</p>
      </div>
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

function OwnerCard({ owner }) {
  return (
    <div className="bg-red">
      <h3>Contact Owner</h3>
      <div>
        <img src={owner?.avatar} alt="" />
      </div>
      <div className="flex">
        <MailIcon />
        <p>{owner.name}</p>
      </div>
      <div className="flex">
        <ProfileIcon />
        <p>{owner.email}</p>
      </div>
    </div>
  );
}

export function SingleVenue({ venue }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Intro venue={venue} />
        <ActionButton id={venue.id} />
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
      </div>
      <OwnerCard owner={venue.owner} />
      <p>Last updated: {venue?.updated.slice(0, 10)}</p>
    </>
  );
}
