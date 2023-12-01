import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../api/auth/login";
import { Link } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    email: yup.string().required("Required field"),
    password: yup.string().min(8).required("Required field"),
  })
  .required();

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div className="h-screen  bg-light">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl mt-32">Login</h1>
        <form
          onSubmit={handleSubmit((data) => login(data))}
          className="flex flex-col gap-2 py-5 px-20 bg-red rounded-xl"
        >
          <div className="loginInput">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="user@stud.noroff.no"
              className="border block p-2 w-full rounded-lg border-black"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="loginInput">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="********"
              className="border block p-2 w-full rounded-lg border-black"
            />
            <p>{errors.password?.message}</p>
          </div>
          <button className="bg-blue hover:bg-blueHover hover:text-white py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl">
            Login
          </button>
        </form>
        <Link to="/register" className="underline">
          <p>
            Dont have a Holidaze profile?{" "}
            <span className="underline">Register here</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
