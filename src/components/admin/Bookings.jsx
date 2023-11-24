import { useEffect, useState } from "react";
import { CustomerBooking } from "../cards/CustomerBooking";

export function Bookings({ venue }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(venue.bookings);
  }, [venue]);

  return (
    <div>
      <h2 className="text-xl">Bookings on venue</h2>
      <div className="bg-light rounded-lg">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <CustomerBooking key={booking.id} id={booking.id} />
          ))
        ) : (
          <div>No bookings yet...</div>
        )}
      </div>
    </div>
  );
}
