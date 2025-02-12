import React, { useContext, useEffect, useState } from "react";
import { contextApi } from "../AuthProvider/AuthContext";
import Loading from "./Loading";
import MarathonCard from "./MarathonCard";
import axios from "axios";
import { ThemeContext } from "./ThemeProvider";
 // Import ThemeContext

const Marathon = () => {
  const { loading } = useContext(contextApi);
  const [marathon, setMarathon] = useState([]);
  const { theme } = useContext(ThemeContext); // Use ThemeContext

  useEffect(() => {
    axios
      .get("https://marathon-mangement-server.vercel.app/marathon", {
        withCredentials: true,
      })
      .then((res) => setMarathon(res.data));
  }, []);

  if(loading){
    return <Loading></Loading>
  }
  else{
    return (
      <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} py-10`}>
        <div className="text-center mb-10">
          <h1 className={`text-4xl font-bold ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>
            MARATHON
          </h1>
        </div>
  
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {marathon.map((item) => (
            <MarathonCard key={item._id} item={item} theme={theme} />
          ))}
        </div>
      </div>
    );
  }

};

export default Marathon;
