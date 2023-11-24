import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { API } from "../api/enpoints";
import { makeBooking } from "../api/booking/makeBooking";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Booking() {
  const { venueId } = useParams();
  const urlParameters = "?_owner=true&_bookings=true";
  const url = `${API.venues.id(venueId).$ + urlParameters}`;
  const { data: venue, isLoading, error } = useFetch(url);
  //   const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  //   const [startDate, setStartDate] = useState(new Date());
  //   const [endDate, setEndDate] = useState(null);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function bookingData(data) {
    console.log(data);
    const formData = {
      dateFrom: data.dateFrom,
      //   dateFrom: JSON.stringify(data.dateFrom).slice(0, 11),
      dateTo: data.dateTo,
      //   dateTo: JSON.stringify(data.dateTo).slice(0, 11),
      guests: Number(data.guests),
      venueId: venueId,
    };
    console.log(formData);
    makeBooking(formData);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <ErrorPage />;
  }
  return (
    <div>
      <h1>Pick Dates</h1>
      <p>Venue: {venue.name}</p>
      <p>Ref.nr: {venueId}</p>
      <p>Choose date from and date to.</p>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 rounded-full bg-redHover"></div>
        <p>Dates not available for booking</p>
      </div>
      <form
        id="bookingForm"
        onSubmit={handleSubmit((data) => bookingData(data))}
      >
        <div className="bg-light">
          <Controller
            control={control}
            name="dateFrom"
            render={({ field }) => (
              <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                minDate={new Date()}
                // endDate={endDate}
                onChange={(startDate) =>
                  field.onChange(startDate) && setStartDate(startDate)
                }
                inline
                required
                form="bookingForm"
              />
            )}
          />
          <Controller
            control={control}
            name="dateTo"
            render={({ field }) => (
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={() => startDate}
                minDate={startDate}
                // endDate={endDate}
                onChange={(endDate) =>
                  field.onChange(endDate) && setEndDate(endDate)
                }
                inline
                required
                form="bookingForm"
              />
            )}
          />

          <p>Maximum guests for this booking: {venue.maxGuests}</p>
          <label>How many guests for this booking?</label>
          <input
            {...register("guests", { requierd: true })}
            type="number"
            required
            max={venue.maxGuests}
            className="block"
          />
          <button
            type="submit"
            className="bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Book dates
          </button>
        </div>
      </form>
    </div>
  );
}
