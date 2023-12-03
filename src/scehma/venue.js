import * as yup from "yup";

export const venueSchema = yup.object({
  name: yup.string().required("*Please add a name"),
  description: yup.string().required("*Please add description"),
  media: yup.array().of(yup.string()).ensure().optional(),
  price: yup
    .number("This field must be a number")
    .required("*Please add price"),
  maxGuests: yup
    .number("This field must be a number")
    .required("*Please add guests"),
  rating: yup.number().min(0).max(5),
  meta: yup.object().shape({
    wifi: yup.boolean(),
    parking: yup.boolean(),
    breakfast: yup.boolean(),
    pets: yup.boolean(),
  }),
  location: yup.object().shape({
    address: yup.string().optional(),
    city: yup.string().optional(),
    zip: yup.string().optional(),
    country: yup.string().optional(),
    lat: yup.number().optional(),
    lng: yup.number().optional(),
  }),
});
