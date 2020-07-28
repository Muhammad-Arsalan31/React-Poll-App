import React from "react";

export const Navbar = () => {
  return (
    <ul className="h-12 bg-gray-400 flex justify-center items-center">
      <li className="mx-1 py-3 px-3 bg-indigo-300 h-full">Polls</li>
      <li className="mx-1 py-3  px-3 bg-indigo-300 h-full">Add new Poll</li>
    </ul>
  );
};
