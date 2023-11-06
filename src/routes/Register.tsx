import { useState } from "react";
import useRegister from "../api/auth/useRegister.js";
import { Link } from "react-router-dom";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  avatar: string;
  venueManager: boolean;
}

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [venueManager, setVenueManager] = useState(false);

  const url = "https://api.noroff.dev/api/v1/holidaze/auth/register";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const registerData: RegisterData = {
      name,
      email,
      password,
      avatar,
      venueManager,
    };

    console.log(registerData);

    useRegister(url, registerData);
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (e.target.name === "name") {
      setName(value);
    }
    if (e.target.name === "email") {
      setEmail(value);
    }
    if (e.target.name === "password") {
      setPassword(value);
    }
    if (e.target.name === "avatar") {
      setAvatar(value);
    }
  }

  function checkHandler() {
    setVenueManager(!venueManager);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="loginInput">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onInputChange}
            required
            className="border block"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
            required
            className="border block"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            required
            className="border block"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="avatar">avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            value={avatar}
            onChange={onInputChange}
            className="border block"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="venueManager">admin</label>
          <input
            type="checkbox"
            name="venueManager"
            id="venueManager"
            defaultChecked={venueManager}
            onChange={checkHandler}
            className="block"
          />
        </div>
        <button className="bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl">
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
