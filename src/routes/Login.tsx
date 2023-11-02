import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen">
      <form action="" method="post">
        <div className="loginInput">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border block"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border block"
          />
        </div>
      </form>
      <Link to="/register" className="underline">
        Register
      </Link>
    </div>
  );
}

export default Login;
