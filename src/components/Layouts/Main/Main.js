import React from "react";
import Header from "../../Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="relative">
      <div id="top" className="sticky top-0 z-50">
        <Header />
      </div>

      




      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
