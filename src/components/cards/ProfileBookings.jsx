import { Reservation } from "./Reservation";

export function ProfileBooking({ reservations }) {
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
