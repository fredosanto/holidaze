import * as yup from "yup";
import { InferType } from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("Required field"),
  email: yup.string().required("Required field"),
  password: yup.string().min(8).required("Required field"),
  avatar: yup.string().optional(),
  venueManager: yup.boolean().optional(),
});

export type User = InferType<typeof userSchema>;
