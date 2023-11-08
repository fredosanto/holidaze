import { VenueProps } from "../types/hotel";
import Venue from "../components/cards/Venue";
import getVenues from "../api/venues/getVenues";
const url = "https://api.noroff.dev/api/v1/holidaze/venues";
const endpoint =
  "?sort=created&sortOrder=desc&limit=10&_owner=true&_bookings=true";
const link = url + endpoint;
const venues = await getVenues(link);

function Home() {
  console.log(venues);
  return (
    <div>
      <h1 className="text-4xl font-extrabold">Hi im the h1</h1>
      <h2 className="text-2xl font-bold">Hi im the h2</h2>
      <h3 className="text-lg font-bold">This is the h3</h3>
      <p className="text-base font-normal">This is the paragraph</p>
      <p className="text-base font-medium">This is the medium paragrah</p>
      {venues.map((venue: VenueProps) => (
        <Venue
          key={venue.id}
          id={venue.id}
          name={venue.name}
          description={venue.description}
          media={venue.media}
          price={venue.price}
          maxGuests={venue.maxGuests}
          created={venue.created}
          updated={venue.updated}
          meta={venue.meta}
          location={venue.location}
          owner={venue.owner}
          rating={venue.rating}
          bookings={venue.bookings}
        />
      ))}
    </div>
  );
}

export default Home;
