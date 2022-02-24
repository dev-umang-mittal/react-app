import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUser } from "./user";

export default function Navbar() {
  const [user, setUser] = useState(getUser);
  //TODO: delete the routes when the user is logged in

  return (
    <>
      <nav className="flex bg-white flex-wrap items-center justify-between p-4 mb-4">
        <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
          <Link to={"/"}>
            <div className="text-xl text-gray-800 font-semibold font-heading">
              React App
            </div>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
          <Link to={"/signup"}>
            <div className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600">
              SignUp
            </div>
          </Link>
          <Link to={"/login"}>
            <div className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600">
              Login
            </div>
          </Link>
          <Link to={"/dashboard"}>
            <div className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600">
              Dashboard
            </div>
          </Link>
        </div>
        <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
          <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600">
            Content
          </a>
          <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600">
            FAQ
          </a>
          <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
