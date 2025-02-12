import React from "react";

const MyRaces = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          My Races (Work in Progress)
        </h2>
        <p className="text-gray-600 text-center mb-6">
          This section is under development. Here, users will be able to view and manage their registered races, track progress, and get updates.
        </p>

        {/* Placeholder for race list */}
        <div className="border border-dashed border-gray-400 rounded-lg p-6 flex items-center justify-center">
          <p className="text-gray-500">Race details will be displayed here...</p>
        </div>
      </div>
    </div>
  );
};

export default MyRaces;