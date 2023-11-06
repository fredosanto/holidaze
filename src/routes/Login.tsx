import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../api/auth/useLogin";

interface LoginData {
  email: string;
  password: string;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginData: LoginData = {
      email,
      password,
    };

    login(loginData);
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (e.target.name === "email") {
      setEmail(value);
    }
    if (e.target.name === "password") {
      setPassword(value);
    }
  }

  return (
    <div className="h-screen">
      <form onSubmit={handleSubmit}>
        <div className="loginInput">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
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
            className="border block"
          />
        </div>
        <button className="bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl">
          Login
        </button>
      </form>
      <Link to="/register" className="underline">
        Register
      </Link>
    </div>
  );
}

export default Login;
