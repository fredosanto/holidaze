import { useEffect, useState } from "react";
import { userBooking } from "../../api/booking/userBookings";
import { API } from "../../api/enpoints";
import { CustomerBooking } from "./CustomerBooking";
import { Reservation } from "./Reservation";

export function ProfileBooking({ username }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function getBookings() {
      const urlParameters = "?_venue=true";
      const url = `${API.profiles.name(username).bookings + urlParameters}`;
      try {
        const data = await userBooking(url);
        setBookings(data);
      } catch (err) {
        console.log(err);
      }
    }
    getBookings();
  }, [username]);

  if (bookings.length <= 0) {
    return (
      <>
        <h2>Your bookings</h2>
        <div>No bookings created yet</div>
      </>
    );
  }

  return (
    <div>
      <h2 className="my-5">Upcoming reservations</h2>
      <div className="flex flex-col gap-10">
        {bookings.map((booking) => (
          // <div key={booking.id}>{booking.id}</div>
          // <CustomerBooking key={booking.id} id={booking.id} />
          <Reservation key={booking.id} reservation={booking} />
        ))}
      </div>
    </div>
  );
}
