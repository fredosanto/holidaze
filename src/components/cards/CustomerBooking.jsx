import { API } from "../../api/enpoints";
import { useFetchProfileVenues } from "../../hooks/useFetchProfileVenues";

export function CustomerBooking({ id }) {
  const urlParameters = `?_customer=true&_venue=true`;
  const url = `${API.bookings.id(id).$ + urlParameters}`;
  const { data: booking, isLoading, error } = useFetchProfileVenues(url);

  const customerImg = booking?.customer.avatar;

  return (
    <div className="flex flex-col gap-2 p-5">
      <div className="flex items-center">
        <div>
          {customerImg ? (
            <img
              src={booking?.customer?.avatar}
              alt="avatar"
              className="rounded-full h-20 w-20 object-cover"
            />
          ) : (
            <div>No avatar</div>
          )}
        </div>
        <div>
          <h3>{booking?.customer.name}</h3>
          <p>{booking?.customer.email}</p>
        </div>
      </div>
      <div>
        <hr className="text-grey" />
        <p>Date from: {booking?.dateFrom.slice(0, 10)}</p>
        <p>Date to: {booking?.dateTo.slice(0, 10)}</p>
        <p>Guests: {booking?.guests}</p>
        <hr className="text-grey" />
      </div>
      <div>
        <p>Booking nr:</p>
        <p>{booking?.id}</p>
      </div>
    </div>
  );
}
