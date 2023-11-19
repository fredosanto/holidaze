import { useEffect, useState } from "react";

export function Bookings({ venueBookings }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(venueBookings);
  }, []);
  console.log(bookings);
  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <h2>Booking: {booking.id}</h2>
          <p>
            Date: {booking.dateFrom} to {booking.dateTo}
          </p>
          <p>Guests: {booking.guests}</p>
        </div>
      ))}
    </div>
  );
}
