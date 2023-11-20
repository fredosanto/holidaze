import { useParams } from "react-router";

export function Booking() {
  const { venueId } = useParams();
  return (
    <div>
      <h1>Pick Dates</h1>
      <p>Venue: {venueId}</p>
      <p>Choose date from and date to.</p>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 rounded-full bg-redHover"></div>
        <p>Dates not available for booking</p>
      </div>
    </div>
  );
}
