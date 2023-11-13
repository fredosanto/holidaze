import { NavLink } from "react-router-dom";
import { useLogout } from "../../../api/auth/index.mjs";
import { useState, useEffect } from "react";
import { isOnline } from "../../../api/auth/index.mjs";
import { boolean } from "yup";

function Nav() {
  const status = isOnline();
  const [isOnlineStatus, setIsOnlineStatus] = useState(boolean);

  useEffect(() => {
    if (status) {
      setIsOnlineStatus(true);
    } else {
      setIsOnlineStatus(false);
    }
  }, [status]);

  return (
    <nav className="flex flex-col md:flex-row items-end bg-red w-full">
      <div id="logo" className="text-4xl font-bold">
        Holidaze
      </div>
      <ul className="flex flex-col md:flex-row gap-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/venues">Venues</NavLink>
        </li>
        <li>
          {localStorage.getItem("token") ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
        {isOnlineStatus ? (
          <li>
            <button onClick={useLogout}>Logout</button>
          </li>
        ) : (
          <li></li>
        )}
        <li className="bg-green">{isOnlineStatus ? "Online" : "Offline"}</li>
      </ul>
    </nav>
  );
}

export default Nav;
