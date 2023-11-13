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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit((data) => register(data))}>
        <div className="loginInput">
          <label htmlFor="name">Name:</label>
          <input
            {...formRegister("name")}
            placeholder="Username"
            className="border block"
          />
          <p>{errors.name?.message}</p>
        </div>
        <div className="loginInput">
          <label htmlFor="email">Email:</label>
          <input
            {...formRegister("email")}
            type="email"
            placeholder="user@stud.noroff.no"
            className="border block"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="loginInput">
          <label htmlFor="password">Password:</label>
          <input
            {...formRegister("password")}
            type="password"
            placeholder="********"
            className="border block"
          />
          <p>{errors.password?.message}</p>
        </div>
        <div className="loginInput">
          <label htmlFor="avatar">Avatar:</label>
          <input
            {...formRegister("avatar")}
            placeholder="url"
            className="border block"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="venueManager">Admin</label>
          <input
            {...formRegister("venueManager")}
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
