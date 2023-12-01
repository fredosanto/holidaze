import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .trim("Name can only use a-Z, 0-9, and _")
    .required("Required field"),
  email: yup.string().required("Required field"),
  password: yup.string().min(8).required("Required field"),
  avatar: yup.string().optional(),
  venueManager: yup.boolean().optional(),
});
