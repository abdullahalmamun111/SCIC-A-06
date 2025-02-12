import React, { useContext } from "react";
import { FaRunning, FaMedal, FaHeart } from "react-icons/fa";
import { ThemeContext } from "./ThemeProvider";

const MarathonHighlights = () => {
  const {theme} = useContext(ThemeContext)
  const highlights = [
    {
      id: 1,
      icon: <FaRunning className="text-4xl text-blue-500" />,
      title: "Participants",
      description:
        "Join thousands of runners across the globe in this iconic marathon event.",
    },
    {
      id: 2,
      icon: <FaMedal className="text-4xl text-yellow-500" />,
      title: "Achievements",
      description:
        "Earn medals and rewards while pushing your limits to new heights.",
    },
    {
      id: 3,
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "Community Impact",
      description:
        "Every step you take supports charitable causes and builds stronger communities.",
    },
  ];

  return (
    <section 

    className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-b from-green-400 via-blue-500 to-purple-600  text-black"} py-12 px-4`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Marathon Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              // className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition duration-300"
              className={`${theme === "dark" ? "bg-gray-500 text-white shadow-lg" : "bg-white text-black"} rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition duration-300`}
            >
              <div className="mb-4 text-center flex justify-center">{highlight.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarathonHighlights;
