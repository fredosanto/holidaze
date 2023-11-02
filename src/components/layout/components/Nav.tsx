import { Link, NavLink } from "react-router-dom";

function Nav() {
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
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
