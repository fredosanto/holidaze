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
  const starRow = [];
  for (let i = 0; i < venue.rating; i++) {
    starRow.push(i);
    // starRow.push(<StarIcon key={i} />);
  }

  console.log(starRow);
  return (
    <>
      <div>
        <h1 className="text-xl">{venue.name}</h1>
        <div className="flex">
          <GlobeIcon />
          <p className="p-1">
            {venue.location?.city}, {venue.location?.country}
          </p>
        </div>
      </div>
      <p>{venue.description}</p>
      <div className="flex justify-between">
        <div>
          <p className="font-medium">Price per night</p>
          <div className="flex">
            <BankCardIcon />
            <p className="p-1 font-bold text-xl">{venue.price} NOK</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <p className="font-medium">Rating</p>
            <div className="flex py-1">
              {starRow.map((star) => (
                <StarIcon key={star} />
              ))}
              {/* {venue.rating ? { starRow } : <p className="m-auto">N/A</p>} */}
            </div>
          </div>
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
          className=" flex bg-blue hover:bg-blueHover w-fit m-auto py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          <CalendarIcon />
          <p className="p-1">Check available dates</p>
        </Link>
      ) : (
        <Link
          to={`/login`}
          className="flex  bg-blue hover:bg-blueHover w-fit m-auto py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          <ProfileIcon />
          <p className="p-1">Login to book dates</p>
        </Link>
      )}
    </>
  );
}

function Services({ maxGuests, wifi, parking, breakfast, pets }) {
  return (
    <div className="flex flex-col items-start w-fit p-10 gap-3 bg-red rounded-xl my-10 m-auto">
      <div className="flex self-center">
        <h3 className="text-2xl">Services</h3>
      </div>
      <div className="flex ">
        <GroupIcon />
        <p className="pl-2">
          <b>Max guest</b>: {maxGuests}
        </p>
      </div>
      <div className="flex">
        <WifiIcon />
        <p className="pl-2">
          <b>Wifi</b>: {wifi ? "included" : "No"}
        </p>
      </div>
      <div className="flex">
        <CarIcon />
        <p className="pl-2">
          <b>Parking</b>: {parking ? "included" : "No"}
        </p>
      </div>
      <div className="flex">
        <CupIcon />
        <p className="pl-2">
          <b>Breakfast</b>: {breakfast ? "included" : "No"}
        </p>
      </div>
      <div className="flex">
        <PawIcon />
        <p className="pl-2">
          <b>Pets</b>: {pets ? "Pet friendly" : "No"}
        </p>
      </div>
    </div>
  );
}

function VenueMedia({ image, alt }) {
  return (
    <div>
      <img src={image} alt={alt} className="object-cover w-full max-h-96" />
    </div>
  );
}

function OwnerCard({ owner }) {
  return (
    <div className=" bg-light p-5  w-fit m-auto my-10 rounded-xl ">
      <h3 className="text-2xl text-center mb-5 underline">Contact Owner</h3>
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div>
          <img
            src={owner?.avatar}
            alt=""
            className="object-cover w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex">
            <ProfileIcon />

            <p className="pl-1">{owner.name}</p>
          </div>
          <div className="flex">
            <MailIcon />
            <p className="pl-1">{owner.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SingleVenue({ venue }) {
  return (
    <>
      <hr className="text-grey" />
      <div className="md:flex md:justify-between">
        <div className="flex flex-col my-10 gap-5 md:basis-1/2 bg-light md:rounded-xl p-5">
          <Intro venue={venue} />
          <ActionButton id={venue.id} />
        </div>
        <div className="md:basis-1/3 ">
          <Services
            maxGuests={venue.maxGuests}
            wifi={venue.meta?.wifi}
            parking={venue.meta?.parking}
            breakfast={venue.meta?.breakfast}
            pets={venue.meta?.pets}
          />
        </div>
      </div>
      <hr className="text-grey" />
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl">Venue Images</h3>
        {venue.media.length >= 0 ? (
          venue.media.map((image, index) => (
            <VenueMedia key={index} image={image} alt={venue.name} />
          ))
        ) : (
          <div>No images available</div>
        )}
      </div>
      <hr className="text-grey" />
      <OwnerCard owner={venue.owner} />
      <p className="text-center">
        Last updated: <b>{venue?.updated.slice(0, 10)}</b>
      </p>
    </>
  );
}
