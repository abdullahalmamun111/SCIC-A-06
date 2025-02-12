import React, { useContext } from "react";
import Slider from "../Components/Slider";
import Marathon from "../Components/Marathon";
import UpcomingMarathon from "../Components/UpcomingMarathon";
import SuccessStories from "../Components/SuccessStories";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../Components/ThemeProvider";
import MarathonHighlights from "../Components/MarathonHighlights ";
 // Import ThemeContext

const Home = () => {
  const { theme } = useContext(ThemeContext); // Use ThemeContext

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      <Helmet>
        <title>Home || RunSphere</title>
      </Helmet>
      <div className="-mt-[12px]">
        <Slider />
      </div>
      <Marathon />
      <UpcomingMarathon />
      <SuccessStories />
      <MarathonHighlights />
    </div>
  );
};

export default Home;
