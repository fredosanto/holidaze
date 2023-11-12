import { Link, NavLink } from "react-router-dom";
import useLogout from "../../../api/auth/useLogout";
// import userStatus from "../../../providers/userStatus";
import { useState, useEffect } from "react";
import { User } from "../../../types/user";

function Nav() {
  const [isOnline, setIsOnline] = useState(false);
  const userJSON = localStorage.getItem("user");
  const user: User | null = userJSON ? JSON.parse(userJSON) : null;

  useEffect(() => {
    if (user === null) {
      setIsOnline(false);
    } else {
      setIsOnline(true);
    }
  }, []);

  // status ? setIsOnline(true) : setIsOnline(false);

  return (
    <nav className="flex flex-col md:flex-row items-end bg-red w-full">
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
        <li className="bg-green">{isOnline ? "Online" : "Offline"}</li>
      </ul>
    </nav>
  );
}

export default Nav;
