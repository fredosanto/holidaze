import { Link, NavLink } from "react-router-dom";
import useLogout from "../../../api/auth/useLogout";
// import userStatus from "../../../providers/userStatus";
import { useState, useEffect } from "react";

function Nav() {
  const [isOnline, setIsOnline] = useState(false);
  const status = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (status === null) {
      console.log(status);
      setIsOnline(false);
    } else {
      console.log(status);
      setIsOnline(true);
    }
  }, []);

  // status ? setIsOnline(true) : setIsOnline(false);

  return (
    <nav className="flex flex-col md:flex-row items-end w-max">
      <div id="logo" className="text-4xl font-bold">
        Holidaze
      </div>
      <ul className="flex flex-col md:flex-row gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/venues">Venues</Link>
        </li>
        <li>
          {localStorage.getItem("token") ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        {localStorage.getItem("token") ? (
          <li>
            <button onClick={useLogout}>Logout</button>
          </li>
        ) : (
          <li></li>
        )}
        <li>{isOnline ? "Online" : "Offline"}</li>
      </ul>
    </nav>
  );
}

export default Nav;
