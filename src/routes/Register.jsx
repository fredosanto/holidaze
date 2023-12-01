import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { register } from "../api/auth/register";
import { Link } from "react-router-dom";
import { userSchema } from "../scehma/user";

function Register() {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  return (
    <div className="my-10">
      <div className="flex flex-col items-center max-w-4xl m-auto gap-5">
        <h1 className="text-2xl">Register</h1>
        <p>Register new customer or admin user.</p>
        <form
          onSubmit={handleSubmit((data) => register(data))}
          className="flex flex-col gap-5 w-72 bg-light p-5 rounded-xl"
        >
          <div className="loginInput flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              {...formRegister("name")}
              placeholder="Username"
              className="border block p-2 w-full rounded-lg border-black"
            />
            <p className="text-xs bg-redHover text-white px-1 rounded-xl">
              {errors.name?.message}
            </p>
          </div>
          <div className="loginInput flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              {...formRegister("email")}
              type="email"
              placeholder="user@stud.noroff.no"
              className="border block p-2 w-full rounded-lg border-black"
            />
            <p className="text-xs bg-redHover text-white px-1 rounded-xl">
              {errors.email?.message}
            </p>
          </div>
          <div className="loginInput flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              {...formRegister("password")}
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
              {...formRegister("avatar")}
              placeholder="url"
              className="border block p-2 w-full rounded-lg border-black"
            />
          </div>
          <div className="loginInput flex flex-col gap-1">
            <div className="flex gap-2">
              <label htmlFor="venueManager">Admin</label>
              <input
                {...formRegister("venueManager")}
                type="checkbox"
                className="block"
              />
            </div>
            <p className="text-xs">
              Check this box to get admin access. With admin user you will be
              able to create venues.
            </p>
          </div>

          <button
            type="submit"
            className="bg-blue hover:bg-blueHover hover:text-white py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Register
          </button>
        </form>
        <Link to="/login" className="underline">
          Go back to login
        </Link>
      </div>
    </div>
  );
}

export default Register;
