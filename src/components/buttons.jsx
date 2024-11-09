export default function Buttons() {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 p-8">
      <div className="space-y-4 w-full max-w-md">
        {/* Primary Button */}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Primary Button
        </button>

        {/* Secondary Button */}
        <button className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
          Secondary Button
        </button>

        {/* Danger Button */}
        <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Danger Button
        </button>

        {/* Outline Button */}
        <button className="w-full border-2 border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Outline Button
        </button>

        {/* Disabled Button */}
        <button
          className="w-full bg-gray-300 text-gray-600 py-2 px-4 rounded cursor-not-allowed"
          disabled
        >
          Disabled Button
        </button>

        {/* Small Button */}
        <button className="w-full bg-blue-600 text-white py-1 px-3 rounded text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Small Button
        </button>

        {/* Large Button */}
        <button className="w-full bg-blue-600 text-white py-3 px-5 rounded text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Large Button
        </button>
      </div>
    </div>
  );
}
