import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { register } from "../api/auth/register";
import { Link } from "react-router-dom";
import { BackIcon } from "../components/icons/index.mjs";
import { registerSchema } from "../scehma/user";
import { useState } from "react";

function Register() {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = async (data) => {
    const res = await register(data);
    setMessage(res);
    console.log(res);
    if (res === true) {
      return setSuccess(res);
    }
    return setSuccess(false);
  };

  return (
    <div className="my-10">
      <Link to="/login" className="flex my-2">
        <BackIcon />
        Back to login
      </Link>
      <div className="flex flex-col items-center max-w-4xl m-auto gap-5">
        <h1 className="text-2xl">Register</h1>
        <p>Register new customer or admin user.</p>
        <p>Fields marked with * is required.</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-72 bg-light p-5 rounded-xl"
        >
          <div className="loginInput flex flex-col gap-1">
            <label htmlFor="name">Username: *</label>
            <input
              {...registerForm("name")}
              placeholder="Username"
              autoComplete="off"
              className="border block p-2 w-full rounded-lg border-black"
            />
            <p className="text-xs bg-redHover text-white px-1 rounded-xl">
              {errors.name?.message}
            </p>
            <p className="inline-block text-xs">Note: use a-Z, 0-9, no space</p>
          </div>
          <div className="loginInput flex flex-col gap-1">
            <label htmlFor="email">Email: *</label>
            <input
              {...registerForm("email")}
              type="email"
              placeholder="user@stud.noroff.no"
              autoComplete="off"
              pattern="^[\w\-.]+@stud.noroff.no$"
              className="border block p-2 w-full rounded-lg border-black"
            />
            <p className="text-xs bg-redHover text-white px-1 rounded-xl">
              {errors.email?.message}
            </p>
            <p className="inline-block text-xs">
              Note: must be a @stud.noroff.no
            </p>
          </div>
          <div className="loginInput flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              {...registerForm("password")}
              type="password"
              placeholder="********"
              className="border block p-2 w-full rounded-lg border-black"
            />
            <p className="text-xs bg-redHover text-white px-1 rounded-xl">
              {errors.password?.message}
            </p>
          </div>
          <div className="loginInput">
            <label htmlFor="avatar">Avatar:</label>
            <input
              {...registerForm("avatar")}
              placeholder="https://url.com/image.jpg"
              className="border block p-2 w-full rounded-lg border-black"
            />
            <p className="inline-block text-xs">Note: copy/pase a image url.</p>
          </div>
          <div className="loginInput flex flex-col gap-1">
            <div className="flex gap-2">
              <label htmlFor="venueManager">Admin</label>
              <input
                {...registerForm("venueManager")}
                type="checkbox"
                className="block"
              />
            </div>
            <p className="text-xs">
              Check this box to get admin access. With admin user you will be
              able to create venues.
            </p>
          </div>
          <p className="text-center text-xs bg-redHover text-white px-1 rounded-xl">
            {message}
          </p>
          {success ? (
            <div>
              <p className="text-center text-xs bg-blueHover text-white px-1 rounded-xl">
                Success! You are now registered! Go back to login.
              </p>
              <Link
                to="/login"
                className="block my-2 text-center bg-green hover:bg-greenHover hover:text-white py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
              >
                Go to login
              </Link>
            </div>
          ) : (
            ""
          )}

          <button
            type="submit"
            className="bg-blue hover:bg-blueHover hover:text-white py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
