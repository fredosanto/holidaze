import { useParams } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { update } from "../api/auth/update";
import { API } from "../api/enpoints";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useFetchReservation } from "../hooks/useFetchReservation";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

const reservationSchema = yup.object({
  datePicker: yup
    .array()
    .length(2)
    .required("Please add booking date from and to")
    .of(yup.date().required("Please choose a date for both dates")),
  guests: yup
    .number()
    .required()
    .typeError("Field must be a number between 1 and Max Guest"),
});

export function UpdateBooking() {
  const { bookingId } = useParams();
  const bookingParameters = "?_customer=true&_venue=true";
  const bookingUrl = `${API.bookings.id(bookingId).$ + bookingParameters}`;

  const { data: reservation, error } = useFetchReservation(bookingUrl);
  // console.log(reservation);

  const venueId = reservation?.venue?.id;
  const venueParameters = "?_owner=true&_bookings=true";
  const venueUrl = `${API.venues.id(venueId).$ + venueParameters}`;
  const { data: reservationVenue, isLoading } = useFetch(venueUrl);

  const [dateRange, setDataRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(reservationSchema) });

  function bookingData(data) {
    console.log(data);
    const formData = {
      dateFrom: data.bookingDates[0],
      dateTo: data.bookingDates[1],
      guests: Number(data.guests),
    };
    console.log(formData);
    update(formData, bookingUrl);
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
            {/* <form
            onSubmit={handleSubmit((data) => bookingData(data))}
            className="flex flex-col items-center"
          > */}
            <div>
              <div>
                <Controller
                  control={control}
                  name="datePicker"
                  rules={{ required: true }}
                  // createUpdateRegister
                  //   defaultValue={null}
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
                        // selected={value}
                        isClearable={true}
                        inline
                        // withPortal
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
              <button
                type="submit"
                className="inline-block text-black font-medium uppercase bg-blue hover:bg-blueHover hover:text-white py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
              >
                Update dates
              </button>
            </div>
          </form>
        </div>
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
      </div>
    </div>
  );
}
