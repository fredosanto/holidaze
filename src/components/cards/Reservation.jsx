import { Venue } from "../cards/venue/Venue";
import { user } from "../../api/auth/status";

export function Reservation({ reservation }) {
  const userProfile = user();

  //   console.log(reservation);

  return (
    <div>
      <h3>Reservation nr: {reservation.id}</h3>
      <Venue
        key={reservation.venue.id}
        venue={reservation.venue}
        user={userProfile}
        reservationId={reservation.id}
      />
    </div>
  );
}
