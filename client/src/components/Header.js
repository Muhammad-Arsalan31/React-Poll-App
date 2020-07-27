import React from "react";

export const Header = () => {
  return (
    <div className="h-auto ">
      <h1 className="text-red-200 text-center py-16 text-4xl">Poll App</h1>
      <div className="md:flex bg-green-200 w-64 lg:w-auto rounded-lg p-6 m-5">
        <div className="text-center md:text-left">
          <h2 className="text-lg">Erin Lindford</h2>
          <div className="w-auto bg-red-300 p-2 ">
            <p>33</p>
          </div>
          <div className="text-purple-500">Product Engineer</div>
          <div className="text-gray-600">erinlindford@example.com</div>
          <div className="text-gray-600">(555) 765-4321</div>
        </div>
      </div>
    </div>
  );
};
