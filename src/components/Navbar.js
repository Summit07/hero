import React from "react";
import { Link } from "react-router-dom";
import About from "../pages/about";
import { Routes, Route } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="relative flex h-16 items-center justify-between bg-cyan-400 font-mono text-gray-700 antialiased shadow-sm "
      role="navigation"
    >
      <Link
        to="/"
        className="m-8 animate-pulse  rounded-full from-red-700 via-teal-500 to-cyan-700 py-2 px-8 text-2xl text-white  transition duration-500  ease-out  hover:bg-gradient-to-r"
      >
        Hero
      </Link>
      <div className="cursor-pointer px-4 pr-6 md:hidden " onClick={toggle}>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="hidden space-x-4 pr-8 md:block">
        <Link
          to="/"
          className="animate-pulse rounded-full py-2 px-6 text-xl tracking-wide transition duration-300 hover:bg-cyan-500"
        >
          Home
        </Link>
        <Link to="/menu">Menu</Link>
        {/* <Routes>
        
        <Route path="/about" component={About} />
      </Routes> */}
        <Link to="/about" path="/about" component={About}>
          About
        </Link>
        <Link to="/content">Content</Link>
      </div>
    </nav>
  );
};

export default Navbar;
