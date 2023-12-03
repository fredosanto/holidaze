import { array, date, number, object } from "yup";

export const bookingSchema = object({
  datePicker: array()
    .length(2)
    .required("Please add booking date from and to")
    .of(date().required("Please choose a date for both dates")),
  guests: number().required(),
});
