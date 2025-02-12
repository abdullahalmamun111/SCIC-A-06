import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const LeaderBoard = () => {
  const {theme} = useContext(ThemeContext)
  const runners = [
    { rank: 1, name: "John Doe", time: "2h 15m 30s", country: "USA" },
    { rank: 2, name: "Alice Smith", time: "2h 20m 15s", country: "UK" },
    { rank: 3, name: "Michael Brown", time: "2h 25m 40s", country: "Canada" },
    { rank: 4, name: "Sophia Johnson", time: "2h 30m 10s", country: "Australia" },
    { rank: 5, name: "Daniel Lee", time: "2h 35m 50s", country: "South Korea" },
  ];

  return (
    <div 
    // className="min-h-screen bg-gray-100 flex flex-col items-center p-5"
    className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} p-5 flex flex-col items-center min-h-screen`}
    >
      <div 
      className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Marathon Leaderboard
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white text-gray-800">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Country</th>
              </tr>
            </thead>
            <tbody>
              {runners.map((runner, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition-colors"
                >
                  <td className="py-3 px-4 font-bold">{runner.rank}</td>
                  <td className="py-3 px-4">{runner.name}</td>
                  <td className="py-3 px-4">{runner.time}</td>
                  <td className="py-3 px-4">{runner.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
