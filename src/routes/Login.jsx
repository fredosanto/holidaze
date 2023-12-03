import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { login } from "../api/auth/login";
import { Link } from "react-router-dom";
import { loginSchema } from "../scehma/user";
import { useState } from "react";

export function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  async function handleLogin(formData) {
    const res = await login(formData);
    setErrorMessage(res);
  }

  return (
    <div className="">
      <div className="flex flex-col items-center gap-5 mb-10">
        <h1 className="text-2xl mt-32">Login</h1>
        <form
          onSubmit={handleSubmit((data) => handleLogin(data))}
          className="flex flex-col gap-5 py-5 px-10 bg-light rounded-xl"
        >
          <div className="loginInput">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="user@stud.noroff.no"
              pattern="^[\w\-.]+@stud.noroff.no$"
              autoComplete="off"
              className="border block p-2 w-72 rounded-lg border-black"
            />
            <p className="text-xs bg-redHover text-white px-1 rounded-xl">
              {errors.email?.message}
            </p>
          </div>
          <div className="loginInput">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="********"
              className="border block p-2 w-72 rounded-lg border-black"
            />
            <p className="text-xs bg-redHover text-white px-1 rounded-xl">
              {errors.password?.message}
            </p>
          </div>
          <p className="text-center text-xs bg-redHover text-white px-1 rounded-xl">
            {errorMessage}
          </p>
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
