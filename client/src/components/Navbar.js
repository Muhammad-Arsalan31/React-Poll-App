import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <ul className="h-12 bg-gray-400 flex justify-center items-center">
      <li className="mx-1 py-3 px-3  h-full">
        <NavLink to="/" activeClassName="bg-indigo-300">
          Polls
        </NavLink>
      </li>
      <li className="mx-1 py-3  px-3  h-full">
        <NavLink to="/addnewpoll">Add New Poll</NavLink>
      </li>
    </ul>
  );
};
