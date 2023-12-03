import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { API } from "../api/enpoints";
import { makeBooking } from "../api/booking/makeBooking";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import DatePicker from "react-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "../scehma/booking";
import { BackIcon } from "../components/icons/index.mjs";
import { ResponseMessage } from "../components/ResponseMessage";
import "react-datepicker/dist/react-datepicker.css";

export function Booking() {
  const { venueId } = useParams();
  const urlParameters = "?_owner=true&_bookings=true&_customer=true";
  const url = `${API.venues.id(venueId).$ + urlParameters}`;
  const { data: venue, isLoading, error } = useFetch(url);

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [dateRange, setDataRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(bookingSchema) });

  async function formatBookingData(data) {
    const formData = {
      dateFrom: data.datePicker[0],
      dateTo: data.datePicker[1],
      guests: Number(data.guests),
      venueId: venueId,
    };
    const res = await makeBooking(formData);
    setMessage(res);
    if (res === true) {
      return setSuccess(res);
    }
    return setSuccess(false);
  }

  const datesToExclude = venue?.bookings?.map((booking) => ({
    start: new Date(booking.dateFrom),
    end: new Date(booking.dateTo),
  }));

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <ErrorPage />;
  }

  return (
    <div>
      <Link to={`/venue/${venueId}`} className="flex my-2">
        <BackIcon />
        Back to venues
      </Link>

      <div className="flex flex-col my-10 items-center">
        <h1 className="text-2xl my-5">Pick Dates</h1>
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-xl">{venue.name}</h2>
          <p className="text-grey">Ref.nr: {venueId?.slice(0, 18)}</p>
          <p>Choose date from and date to.</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-redHover"></div>
          <p>Dates not available for booking</p>
        </div>
        <div className="text-center">
          <form
            id="bookingForm"
            onSubmit={handleSubmit(formatBookingData)}
            className="my-5"
          >
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="basis-1/2">
                <Controller
                  control={control}
                  name="datePicker"
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
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
                  )}
                />
                <div className="bg-redHover text-white text-xs rounded-xl">
                  <p>
                    {errors.datePicker?.message ||
                      errors.datePicker?.[1].message}
                  </p>
                </div>
              </div>
              <div className="basis-1/2 flex flex-col gap-1 my-5 items-center bg-light p-5 rounded-xl">
                <p className="bg-green text-xs p-2 rounded-xl">
                  Maximum guests: <b>{venue.maxGuests}</b>
                </p>
                <label>How many guests for this booking?</label>
                <input
                  {...register("guests", { required: true })}
                  type="number"
                  placeholder="4"
                  required
                  max={venue.maxGuests}
                  min={1}
                  className="block p-2 w-full text-center rounded-xl"
                />
                <div className="bg-redHover text-white text-xs rounded-xl">
                  <p>{errors.guests?.message}</p>
                </div>
                <ResponseMessage
                  message={message}
                  success={success}
                  messageContent={"Great! Booking success!"}
                  linkContent={`profile`}
                />
                <button
                  type="submit"
                  className="inline-block text-black font-medium uppercase bg-blue hover:bg-blueHover hover:text-white my-4 py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
                >
                  Book dates
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
