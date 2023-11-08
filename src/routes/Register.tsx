import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useRegister from "../api/auth/useRegister";
import { Link } from "react-router-dom";

interface FormValues {
  name: string;
  email: string;
  password: string;
  avatar: string;
  venueManager: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required("Required field"),
  email: yup.string().required("Required field"),
  password: yup.string().min(8).required("Required field"),
  avatar: yup.string().optional(),
  venueManager: yup.boolean(),
});

const url: string = "https://api.noroff.dev/api/v1/holidaze/auth/register";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormValues) => useRegister(url, data);

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="loginInput">
          <label htmlFor="name">Name:</label>
          <input
            {...register("name")}
            placeholder="Username"
            className="border block"
          />
          <p>{errors.name?.message}</p>
        </div>
        <div className="loginInput">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            {...register("email")}
            placeholder="user@stud.noroff.no"
            className="border block"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="loginInput">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register("password")}
            placeholder="********"
            className="border block"
          />
          <p>{errors.password?.message}</p>
        </div>
        <div className="loginInput">
          <label htmlFor="avatar">Avatar:</label>
          <input
            {...register("avatar")}
            placeholder="url"
            className="border block"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="venueManager">Admin</label>
          <input
            {...register("venueManager")}
            type="checkbox"
            className="block"
          />
        </div>

        <button
          type="submit"
          className="bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Register
        </button>
      </form>
      <Link to="/login" className="underline">
        Go back to login
      </Link>
    </div>
  );
}

export default Register;
