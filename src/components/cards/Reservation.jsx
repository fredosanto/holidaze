import { Venue } from "./venue/Venue";
import { user } from "../../api/auth/status";

export function Reservation({ reservation }) {
  const userProfile = user();

  return (
    <>
      <div className="flex flex-col md:flex-row my-10">
        <div className="basis-1/2 bg-light p-5">
          <Venue
            key={reservation.venue.id}
            venue={reservation.venue}
            user={userProfile}
            reservationId={reservation.id}
          />
        </div>
        <div className="basis-1/2 flex flex-col gap-2 p-5 items-center justify-center bg-blue rounded-lg">
          <div className="text-center">
            <h3>
              Reservation nr: <b>{reservation.id.slice(0, 18)}</b>
            </h3>
            <p>
              Created: <b>{reservation.created.slice(0, 10)}</b>
            </p>
            <hr className="m-2" />
          </div>
          <p>
            Reservation for:{" "}
            {reservation.guests > 1 ? (
              <b>{`${reservation.guests} guests`}</b>
            ) : (
              <b>{`${reservation.guests} guest`}</b>
            )}
          </p>
          <div>
            <p>
              Reservation from: <b>{reservation.dateFrom.slice(0, 10)}</b>
            </p>
            <p>
              Reservation to: <b>{reservation.dateTo.slice(0, 10)}</b>
            </p>
            <hr className="m-2" />
          </div>
          <p>
            Last updated: <b>{reservation.updated.slice(0, 10)}</b>
          </p>
        </div>
      </div>
      <hr className="text-grey" />
    </>
  );
}
