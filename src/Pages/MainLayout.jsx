import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <main className="mt-[68px]  min-h-[50vh]">
        <Outlet></Outlet>
      </main>
      <div><Footer></Footer></div>
    </div>
  );
};

export default MainLayout;
