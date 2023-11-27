import { useParams } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { update } from "../api/auth/update";
import { API } from "../api/enpoints";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { userBooking } from "../api/booking/userBookings";

const schema = yup.object({
  guests: yup.number().required("Add guests"),
});

export function UpdateBooking() {
  const { bookingId } = useParams();
  const bookingUrl = API.bookings.id(bookingId).$;
  const [bookingInfo, setbookingInfo] = useState("");
  const [dateRange, setDataRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    const fetchBooking = async () => {
      const data = await userBooking(bookingUrl);
      setbookingInfo(data);
    };

    fetchBooking();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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

  console.log(bookingInfo);

  return (
    <div>
      <h1>Update Reservation</h1>
      <div>
        <h2>Your current reservation</h2>
        <p>
          Booked from: {bookingInfo.dateFrom?.slice(0, 10)} to{" "}
          {bookingInfo.dateTo?.slice(0, 10)}
        </p>
        <p className="text-grey">
          Created: {bookingInfo.created?.slice(0, 16)}
        </p>
        <p className="text-grey">
          Last updated: {bookingInfo.updated?.slice(0, 16)}
        </p>
      </div>
      {/* <form onSubmit={handleSubmit((data) => console.log(data))}> */}
      <form onSubmit={handleSubmit((data) => bookingData(data))}>
        <div>
          <div>
            {/* <DatePicker selected={startDate} minDate={startDate} inline /> */}
          </div>
          <div>
            <Controller
              control={control}
              name="bookingDates"
              rules={{ required: true }}
              createUpdateRegister
              //   defaultValue={null}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <>
                  <DatePicker
                    onBlur={onBlur}
                    selectsRange={true}
                    minDate={new Date()}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      setDataRange(update);
                      onChange(update);
                    }}
                    // selected={value}
                    isClearable={true}
                    inline
                    // withPortal
                  />
                </>
              )}
            />
          </div>
        </div>
        <input
          {...register("guests", { required: true })}
          type="number"
          className="block"
        />
        <p>{errors.guests?.message}</p>
        <button
          type="submit"
          className="bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Book dates
        </button>
      </form>
    </div>
  );
}
