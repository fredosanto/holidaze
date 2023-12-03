import * as yup from "yup";

export const registerSchema = yup
  .object({
    name: yup
      .string()
      .trim("Only use a-Z, 0-9, and _")
      .strict()
      .required("Required field, only a-Z, 0-9, :"),
    email: yup
      .string()
      .email("must be a @stud.noroff.no")
      .required("Required field"),
    password: yup.string().min(8).required("Required field"),
    avatar: yup.string().optional(),
    venueManager: yup.boolean().optional(),
  })
  .required();

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("must be a @stud.noroff.no")
      .required("Required field"),
    password: yup.string().min(8).required("Required field"),
  })
  .required();
