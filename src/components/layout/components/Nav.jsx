import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLogout } from "../../../api/auth/index.mjs";
import { useState, useEffect } from "react";
import { isOnline } from "../../../api/auth/index.mjs";
import menuIcon from "../../../assets/menu-outline.svg";
import closeIcon from "../../../assets/close-outline.svg";

function Nav() {
  const isLoggedIn = isOnline();

  function MenuClick(e) {
    let navList = document.getElementById("nav-list");

    if (e.target.name === "menu") {
      return (
        (e.target.name = "close"),
        (e.target.src = closeIcon),
        navList.classList.add("opacity-100"),
        navList.classList.add("top-[80px]"),
        navList.classList.remove("invisible")
      );
    }

    if (e.target.name === "close") {
      return (
        (e.target.name = "menu") && (e.target.src = menuIcon),
        navList.classList.remove("opacity-100"),
        navList.classList.add("top-[80px]"),
        navList.classList.add("invisible")
      );
    }
  }

  return (
    <nav className="flex flex-col md:flex-row justify-between bg-red w-full p-5">
      <div className="flex justify-between items-center mx-5">
        <div>
          <Link to="/">
            <span id="logo" className="text-4xl font-bold">
              Holidaze
            </span>
          </Link>
        </div>
        <div className="md:hidden block">
          <img
            className="inline h-10"
            name="menu"
            src={menuIcon}
            alt=""
            onClick={(e) => MenuClick(e)}
          />
        </div>
      </div>

      <div className="">
        <ul
          id="nav-list"
          className="flex flex-col md:flex-row gap-5 md:gap-10 items-center bg-black md:bg-red text-white md:text-black w-full md:w-auto p-5 md:p-0 z-[2] md:z-auto md:static absolute left-0 opacity-0 md:opacity-100 invisible md:visible transition-all ease-in-out duration-300"
        >
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
              <NavLink
                to="/login"
                className="inline-block bg-green hover:bg-greenHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
              >
                Login
              </NavLink>
            )}
          </li>
          {isLoggedIn ? (
            <li>
              <button
                onClick={useLogout}
                className="inline-block text-black bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
              >
                Logout
              </button>
            </li>
          ) : (
            <li></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
