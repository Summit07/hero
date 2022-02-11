import React from "react";
import { Link } from "react-router-dom";
import About from "../pages/about";
import { Routes, Route } from "react-router-dom";

const Navbar = ({toggle}) => {
  return (
    <nav
      className="flex antialiased justify-between items-center h-16 bg-cyan-400 text-gray-700 relative shadow-sm font-mono "
      role="navigation"
    >
      <Link to="/" className="m-8 text-2xl  text-white py-2 px-8 rounded-full hover:bg-gradient-to-r from-red-700 to-cyan-700 via-teal-500  transition duration-500  animate-pulse  ease-out">
        Hero
      </Link>
      <div className="px-4 cursor-pointer md:hidden pr-6 " onClick={toggle}>
        <svg
          className="w-6 h-6"
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
      <div className="pr-8 md:block space-x-4 hidden">
        <Link to="/" className="hover:bg-cyan-500 py-2 px-6 rounded-full text-xl transition animate-pulse duration-300 tracking-wide">Home</Link>
        <Link to="/menu">Menu</Link>
        {/* <Routes>
        
        <Route path="/about" component={About} />
      </Routes> */}
        <Link to="/about" path='/about' component={About}>About</Link>
        <Link to="/content">Content</Link>
      </div>
    </nav>
  );
};

export default Navbar;
