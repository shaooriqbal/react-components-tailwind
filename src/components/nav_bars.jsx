import React from "react";

export default function NavBars() {
  return (
    <div className="space-y-4 p-4 max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md">
      {/* Basic Navigation Bar */}
      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <h1 className="text-lg font-bold">Basic NavBar</h1>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 bg-blue-700 text-white p-4 rounded-lg shadow-lg flex flex-row  justify-between items-center mx-auto">
        <h1 className="text-lg font-bold">Sticky NavBar</h1>
        <div className=" space-x-4 mt-2">
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Portfolio
          </a>
          <a href="#" className="hover:text-gray-300">
            Blog
          </a>
        </div>
      </div>

      {/* Search Navigation Bar */}
      <div className="bg-green-600 text-white p-4 rounded-lg">
        <h1 className="text-lg font-bold">Search NavBar</h1>
        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Features
            </a>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md p-2 bg-gray-700 text-white focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      {/* NavBar with Dropdown */}
      <div className="bg-purple-700 text-white p-4 rounded-lg">
        <h1 className="text-lg font-bold">NavBar with Dropdown</h1>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <div className="relative group">
            <a href="#" className="hover:text-gray-300">
              More
            </a>
            <div className="absolute hidden group-hover:block bg-white text-black rounded-lg shadow-lg mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Option 2
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Option 3
              </a>
            </div>
          </div>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>

      {/* Icon-Based NavBar */}
      <div className="bg-red-600 text-white p-4 rounded-lg">
        <h1 className="text-lg font-bold">Icon-Based NavBar</h1>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-gray-300">
            <span className="material-icons">home</span>
          </a>
          <a href="#" className="hover:text-gray-300">
            <span className="material-icons">info</span>
          </a>
          <a href="#" className="hover:text-gray-300">
            <span className="material-icons">contact_mail</span>
          </a>
        </div>
      </div>

      <div className="bg-indigo-600 w-full flex justify-between p-8 rounded-lg">
        <h1 className="font-bold text-white text-xl">Logo</h1>
        <ol className="flex flex-row space-x-4 text-white font-semibold hover:cursor-pointer">
          <li className="font-bold text-opacity-50 hover:text-opacity-100">
            Home
          </li>
          <li className="font-bold text-opacity-50 hover:text-opacity-100">
            About
          </li>
          <li className="font-bold text-opacity-50 hover:text-opacity-100">
            Contact
          </li>
        </ol>
      </div>
    </div>
  );
}
