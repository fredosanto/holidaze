import { VenueProps } from "../../types/hotel";

const Venue: React.FC<VenueProps> = (venue) => {
  return (
    <div className="bg-green m-10">
      <h2>{venue.name}</h2>
      <div>
        <p>Description: {venue.description}</p>
        <p>Address: {venue.location.address}</p>
        <p>City: {venue.location.city}</p>
        <p>Country: {venue.location.country}</p>
        <p>Price: {venue.price}</p>
        <p>Price</p>
      </div>
      <button className="bg-blue">View venue</button>
    </div>
  );
};

// function Venue(venue: VenueProps) {
//   return (
//     <div className="bg-green m-10">
//       <h2>{venue.name}</h2>
//       <div>
//         <p>Description: {venue.description}</p>
//         <p>Address: {venue.location.address}</p>
//         <p>City: {venue.location.city}</p>
//         <p>Country: {venue.location.country}</p>
//         <p>Price: {venue.price}</p>
//         <p>Price</p>
//       </div>
//       <button className="bg-blue">View venue</button>
//     </div>
//   );
// }

export default Venue;
