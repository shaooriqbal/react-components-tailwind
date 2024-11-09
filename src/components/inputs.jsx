import React, { useState } from "react";

export default function Inputs() {
  // Initialize state for each input type
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [file, setFile] = useState(null); // Files are stored as File objects
  const [color, setColor] = useState("#000000");
  const [range, setRange] = useState(50); // Default range value
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("");
  const [search, setSearch] = useState("");
  const [tel, setTel] = useState("");
  const [url, setUrl] = useState("");
  const [dropdown, setDropdown] = useState("option1");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload on form submit

    // Log all values or send to backend as needed
    console.log({
      text,
      password,
      email,
      number,
      date,
      time,
      file,
      color,
      range,
      checkbox,
      radio,
      search,
      tel,
      url,
      dropdown,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4 p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
        <label className="block">
          <span className="text-gray-700">Text:</span>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none"
          />
        </label>

        {/* Continue similarly for other input types */}
        <label className="block">
          <span className="text-gray-700">Number:</span>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter number"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Date:</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Time:</span>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">File:</span>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])} // First file selected
            className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Color:</span>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full mt-1 h-10 border border-gray-300 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Range:</span>
          <input
            type="range"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 mx-2">Checkbox:</span>
          <input
            type="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
            className="mt-1 form-checkbox h-5 w-5 text-gray-600 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 mx-2">Radio:</span>
          <input
            type="radio"
            value="option1"
            checked={radio === "option1"}
            onChange={(e) => setRadio(e.target.value)}
            name="radio"
            className="mt-1 form-radio h-5 w-5 text-gray-600 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Search:</span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none"
          />
        </label>

        {/* Continue for other fields like tel, url, dropdown, etc. */}

        <button
          type="submit"
          className="w-full py-2 mt-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
