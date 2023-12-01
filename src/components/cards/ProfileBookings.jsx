import { useFetchReservation } from "../../hooks/useFetchReservation";
import { API } from "../../api/enpoints";
import { Reservation } from "./Reservation";

export function ProfileBooking({ username }) {
  const urlParameters = "?_venue=true";
  const url = `${API.profiles.name(username).bookings + urlParameters}`;

  const { data: reservations, isLoading, error } = useFetchReservation(url);

  if (reservations.length <= 0) {
    return (
      <>
        <h2>Your bookings</h2>
        <div>No bookings created yet</div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col max-w-4xl">
        <p>{error ? { error } : ""}</p>
        <p>{isLoading ? { isLoading } : ""}</p>
        {reservations.map((reservation) => (
          <Reservation
            key={reservation.id}
            reservation={reservation}
            reservationVenue={reservation.venue}
          />
        ))}
      </div>
    </>
  );
}
