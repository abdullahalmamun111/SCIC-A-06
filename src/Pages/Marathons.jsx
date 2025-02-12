import React, { useContext, useEffect, useState } from "react";
import { contextApi } from "../AuthProvider/AuthContext";
import MarathonCard from "../Components/MarathonCard";
import Loading from "../Components/Loading";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../Components/ThemeProvider";

const Marathons = () => {
  const { loading } = useContext(contextApi);
  const [allmarathon, setAllmarathon] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const {theme} = useContext(ThemeContext)


  useEffect(() => {
    fetch(`https://marathon-mangement-server.vercel.app/allmarathon?sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setAllmarathon(data);
      });
  }, [sortOrder]);

    return (
      <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} py-10`}>
        <Helmet>
          <title>All Marathons</title>
        </Helmet>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-500">All MARATHONS</h1>
          <h1 className="text-2xl font-bold my-2 text-gray-500">Sort By</h1>
          <select
            // className=" border border-gray-300 rounded px-4 py-2"
            className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} border border-gray-300 rounded px-4 py-2`}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Newest to Oldest</option>
            <option value="asc">Oldest to Newest</option>
          </select>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allmarathon.map((item) => (
            <MarathonCard key={item._id} item={item}></MarathonCard>
          ))}
        </div>
      </div>
    );
  
};

export default Marathons;
