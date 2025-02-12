import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { contextApi } from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { Tooltip as ReactTooltip } from "react-tooltip";
 // Import ThemeContext
import Loading from "./Loading";
import { ThemeContext } from "./ThemeProvider";

const Navbar = () => {
  const { user, handleLogOut, loading } = useContext(contextApi);
  const { theme, toggleTheme } = useContext(ThemeContext); // Use ThemeContext

  const logOut = () => {
    handleLogOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Logout Successful",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Failed!",
          text: "Logout Failed",
          icon: "error",
        });
      });
  };

  return (
    <div className="navbar fixed px-5 rounded-md top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-200 dark:bg-gray-900 shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm px-3 dropdown-content bg-gray-100 dark:bg-gray-800 rounded-box z-[2] mt-3 w-52 p-2 shadow-lg">
            <li><NavLink to="/" className="text-lg font-medium dark:text-white">Home</NavLink></li>
            <li><NavLink to="/marathons" className="text-lg font-medium dark:text-white">Marathons</NavLink></li>
            <li><NavLink to="/dashboard" className="text-lg font-medium dark:text-white">Dashboard</NavLink></li>
            {user && (
              <>
                <li><NavLink to="/my-races" className="text-lg font-medium dark:text-white">My Races</NavLink></li>
                <li><NavLink to="/leaderboard" className="text-lg font-medium dark:text-white">Leaderboard</NavLink></li>
              </>
            )}
          </ul>
        </div>
        <a className="font-extrabold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold ml-1 dark:text-white">
          <span className="text-blue-800 dark:text-blue-400">Run</span>
          <span className="text-green-800 dark:text-green-400">Sphere</span>
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center space-x-1">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-black dark:text-white font-bold text-[16px]" : "text-primary font-bold text-[16px] dark:text-gray-300"}>Home</NavLink></li>
          <li><NavLink to="/marathons" className={({ isActive }) => isActive ? "text-black dark:text-white font-bold text-[16px]" : "text-primary font-bold text-[16px] dark:text-gray-300"}>Marathons</NavLink></li>
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-black dark:text-white font-bold text-[16px]" : "text-primary font-bold text-[16px] dark:text-gray-300"}>Dashboard</NavLink></li>
          {user && (
            <>
              <li><NavLink to="/my-races" className={({ isActive }) => isActive ? "text-black dark:text-white font-bold text-[16px]" : "text-primary font-bold text-[16px] dark:text-gray-300"}>My Races</NavLink></li>
              <li><NavLink to="/leaderboard" className={({ isActive }) => isActive ? "text-black dark:text-white font-bold text-[16px]" : "text-primary font-bold text-[16px] dark:text-gray-300"}>Leaderboard</NavLink></li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4">
        <button onClick={toggleTheme} className="btn btn-ghost bg-gray-400 text-lg dark:text-white">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {user ? (
          <div className="flex items-center gap-1 md:gap-3">
            <button onClick={logOut} className="btn btn-primary btn-sm md:btn-md text-sm md:text-base dark:text-white">Log Out</button>
            <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300" src={user?.photoURL || "https://via.placeholder.com/150"} alt={user?.displayName || "User"} />
            <ReactTooltip id="my-tooltip-2" place="bottom" variant="info" content={user.displayName} />
          </div>
        ) : (
          <div className="flex gap-4">
            <Link className="btn btn-outline btn-primary dark:text-white" to="/login">Login</Link>
            <Link className="btn btn-primary dark:text-white" to="/register">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
