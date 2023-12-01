import { useEffect, useState } from "react";
import { CustomerBooking } from "../cards/CustomerBooking";

export function Bookings({ venue }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(venue.bookings);
  }, [venue]);

  return (
    <div>
      <div className="bg-light rounded-xl p-5">
        <h2 className="text-xl text-center">Bookings on venue</h2>
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
