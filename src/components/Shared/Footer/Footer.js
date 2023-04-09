import React from "react";
import {
  BsBrowserEdge,
  BsFacebook,
  BsGeoAltFill,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../Assets/edumateLogo.png";
import { IoCallSharp } from "react-icons/io5";
import Typical from "react-typical";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-black text-white max-w-screen-2xl mx-auto pt-8 pb-6">
        <div className="container max-w-screen-xl w-full mx-auto px-4">

          <div className="flex  justify-center items-center ">
            <div className="w-full px-4">
              <h4 className="text-4xl font-semibold text-gray-300">Edumate</h4>
              <h5 className="text-xl mr-16 font-semibold text-gray-300">
                Find Your
                <Typical
                  steps={["Tution", 3000, "Teacher", 3000]}
                  loop={Infinity}
                  wrapper="p"
                ></Typical>
              </h5>
              <div className="mt-6 flex  justify-between w-[120px] lg:mb-0 mb-6">
                <BsFacebook className="text-3xl" />
                <BsInstagram className="text-3xl" />
                <BsWhatsapp className="text-3xl" />
              </div>
            </div>
            
            <div className="w-full  px-4">
              <div className="flex flex-wrap text-4xl font-bold items-top mb-1">
                Contact US
              </div>
              <div className="space-y-2">
                <p className="flex text-2xl gap-1">
                  <BsGeoAltFill className="text-blue-600" />
                  Moon Knights
                  </p>
                <div className="flex text-2xl gap-1">
                  <IoCallSharp className="mt-1 text-blue-600 " />
                  <p className="text-xl">01122334455</p>
                </div>
                <div className="flex text-2xl gap-1">
                  <IoCallSharp className="mt-1 text-blue-600 " />
                  <p className="text-xl">01122334455</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-blueGray-300" />

          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-300 py-1">
                Copyright © <span id="get-current-year">2023</span>
                <a className="text-gray-300 hover:text-gray-800" /> All rights
                reserved
                <a
                  href="#"
                  className="text-gray-300 ml-1 hover:text-blueGray-800"
                >
                  by <span className="inline font-semibold">Team API Avengers</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
