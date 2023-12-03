import { useParams } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reservationSchema } from "../scehma/updateReservation";
import { update } from "../api/auth/update";
import { API } from "../api/enpoints";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { useFetchReservation } from "../hooks/useFetchReservation";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import { ResponseMessage } from "../components/ResponseMessage";
import "react-datepicker/dist/react-datepicker.css";

function CurrentReservation({ reservation, reservationVenue }) {
  return (
    <div className="basis-1/2 flex flex-col gap-1 items-center bg-light h-fit p-5 rounded-lg">
      <div>
        <h3 className="uppercase text-center my-1">Current reservation</h3>
        <p>Booked from: {reservation?.dateFrom?.slice(0, 10)}</p>
        <p>Booked to: {reservation?.dateTo?.slice(0, 10)}</p>
        <p>
          Guests: <b>{reservation?.guests}</b>
        </p>
        <hr className="text-black my-2" />
        <div className="bg-green p-2 rounded-lg">
          <p>Created:</p>
          <p>
            <b>{reservation?.created?.slice(0, 10)}</b>
          </p>
          <p>Last updated:</p>
          <p>
            <b>{reservation?.updated?.slice(0, 10)}</b>
          </p>
        </div>
        <hr className="text-black my-2" />
      </div>
      <div className="">
        <h3 className="uppercase text-center my-1">Venue information</h3>
        <p>
          Price per night: <b>{reservationVenue?.price} NOK</b>
        </p>
        <p>
          Max guests: <b>{reservationVenue?.maxGuests}</b>
        </p>
      </div>
    </div>
  );
}

export function UpdateBooking() {
  const { bookingId } = useParams();
  const bookingParameters = "?_customer=true&_venue=true";
  const bookingUrl = `${API.bookings.id(bookingId).$ + bookingParameters}`;

  const { data: reservation, error } = useFetchReservation(bookingUrl);

  const venueId = reservation?.venue?.id;
  const venueParameters = "?_owner=true&_bookings=true";
  const venueUrl = `${API.venues.id(venueId).$ + venueParameters}`;
  const { data: reservationVenue, isLoading } = useFetch(venueUrl);

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [dateRange, setDataRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(reservationSchema) });

  async function bookingData(data) {
    const formData = {
      dateFrom: data.datePicker[0],
      dateTo: data.datePicker[1],
      guests: Number(data.guests),
    };
    const res = await update(formData, bookingUrl);
    setMessage(res);
    if (res === true) {
      return setSuccess(res);
    }
    return setSuccess(false);
  }

  const datesToExclude = reservationVenue?.bookings?.map((booking) => ({
    start: new Date(booking?.dateFrom),
    end: new Date(booking?.dateTo),
  }));

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <ErrorPage />;
  }

  return (
    <div className="my-10 flex flex-col items-center gap-2 ">
      <h1 className="text-2xl my-5">Update Reservation</h1>
      <h2 className="text-xl">{reservationVenue?.name}</h2>
      <div className="text-center">
        <p>Ref.nr: {bookingId?.slice(0, 18)}</p>
        <p>
          Range date <b>from</b> and <b>to</b>.
        </p>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 rounded-full bg-redHover"></div>
        <p>Dates not available for booking</p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 my-5 max-w-3xl">
        <div className="basis-1/2 text-center">
          <form
            onSubmit={handleSubmit(bookingData)}
            className="flex flex-col items-center"
          >
            <div>
              <div>
                <Controller
                  control={control}
                  name="datePicker"
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <>
                      <DatePicker
                        selectsRange={true}
                        minDate={new Date()}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                          setDataRange(update);
                          onChange(update);
                        }}
                        excludeDateIntervals={datesToExclude}
                        isClearable={true}
                        inline
                      />
                    </>
                  )}
                />
                <div className="bg-redHover text-white text-xs rounded-xl">
                  <p>
                    {errors.datePicker?.message ||
                      errors.datePicker?.[1].message}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <label htmlFor="guests">How many guests:</label>
              <input
                {...register("guests", { required: true })}
                type="number"
                className="block p-2 max-w-xl rounded-xl text-center"
              />
              <div className="bg-redHover text-white text-xs rounded-xl">
                <p>{errors.guests?.message}</p>
              </div>
              <ResponseMessage
                message={message}
                success={success}
                messageContent={"Reservation updated!"}
                linkContent={`profile`}
              />
              <button
                type="submit"
                className="inline-block text-black font-medium uppercase bg-blue hover:bg-blueHover hover:text-white py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
              >
                Update dates
              </button>
            </div>
          </form>
        </div>
        <CurrentReservation
          reservation={reservation}
          reservationVenue={reservationVenue}
        />
      </div>
    </div>
  );
}
