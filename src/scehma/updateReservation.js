import * as yup from "yup";

export const reservationSchema = yup.object({
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
