import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 font-kalam text-orange-500">
      <div className="navbar  bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Me</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case lg:text-xl">
            <p className="uppercase text-info font-mono text-2xl tracking-wider">
              Hasib Ali/
              <span className="text-green-200 text-xs lg:text-sm normal-case font-normal">
                Front-end Developer
              </span>
            </p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">
                <span className="nav">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">
                <span className="nav">Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">
                <span className="nav">Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <span className="nav">About Me</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <span className="nav">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
