import React, { useState } from "react";

const ModalsComponent = () => {
  const [openModal, setOpenModal] = useState(null); // Tracks which modal is open

  const closeModal = () => setOpenModal(null);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-center">Modals Showcase</h1>

      {/* Buttons to open modals */}
      <div className="flex flex-col gap-4 items-center">
        <button
          onClick={() => setOpenModal("basic")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Open Basic Modal
        </button>
        <button
          onClick={() => setOpenModal("centered")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Open Centered Modal
        </button>
        <button
          onClick={() => setOpenModal("fullscreen")}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
        >
          Open Fullscreen Modal
        </button>
      </div>

      {/* Basic Modal */}
      {openModal === "basic" && (
        <div className="fixed inset-0 bg-black bg-transparent flex justify-center items-center">
          <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-lg font-semibold">Basic Modal</h2>
            <p className="mt-4 text-gray-600">
              This is a basic modal with a close button.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 self-end"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Centered Modal */}
      {openModal === "centered" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-1/3 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold">Centered Modal</h2>
            <p className="mt-4 text-gray-600">
              This modal is perfectly centered on the screen.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Modal */}
      {openModal === "fullscreen" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-full h-full p-6 rounded-lg shadow-lg flex flex-col relative">
            <h2 className="text-lg font-semibold">Fullscreen Modal</h2>
            <p className="mt-4 text-gray-600">
              This modal takes up the entire screen.
            </p>
            <button
              onClick={closeModal}
              className="absolute bottom-6 right-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalsComponent;
