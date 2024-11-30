import React from "react";

const LoaderGrid = () => {
  const loaders = [
    "spinner-border",
    "spinner-grow",
    "ring",
    "dot-flash",
    "ellipsis",
    "pulse",
  ];

  const getLoader = (type) => {
    switch (type) {
      case "spinner-border":
        return (
          <div className="border-4 border-t-4 border-blue-500 rounded-full w-10 h-10 animate-spin"></div>
        );
      case "spinner-grow":
        return (
          <div className="bg-blue-500 w-8 h-8 rounded-full animate-ping"></div>
        );
      case "ring":
        return (
          <div className="relative w-10 h-10">
            <div className="absolute border-4 border-blue-500 rounded-full w-full h-full animate-spin border-t-transparent"></div>
          </div>
        );
      case "dot-flash":
        return (
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        );
      case "ellipsis":
        return (
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        );
      case "pulse":
        return (
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {loaders.map((loader, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center space-y-2"
        >
          {getLoader(loader)}
          <span className="text-sm text-gray-600 capitalize">
            {loader.replace("-", " ")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LoaderGrid;
