import { useEffect, useState } from "react";
import { API } from "../../api/enpoints";

export function ProfileBooking({ username }) {
  console.log(username);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function getBookings() {
      const url = API.profiles.name(username).bookings;
      try {
        const response = await fetch(url);
        const res = await response.json();
        setBookings(res);
      } catch (err) {
        console.log(err);
      }
    }
    getBookings;
  });

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
      <h1>{username}</h1>
      {bookings.map((booking) => (
        <div key={booking.id}>{booking.id}</div>
      ))}
    </div>
  );
}
