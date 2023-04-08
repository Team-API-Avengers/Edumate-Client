import React from "react";
import {
  BsBrowserEdge,
  BsFacebook,
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
      <footer class=" bg-black text-white max-w-screen-2xl mx-auto pt-8 pb-6">
        <div class="container max-w-screen-xl  mx-auto px-4">
          <div class="flex  justify-between items-center text-left lg:text-left">
            <div class="w-full  px-4">
              <h4 class="text-4xl font-semibold text-gray-300">Edumate</h4>
              <h5 class="text-lg flex gap-1 mt-2 mb-2 text-gray-300">
                Find Your{" "}
                <Typical
                  steps={["Tution", 3000, "Teacher", 3000]}
                  loop={Infinity}
                  wrapper="p"
                ></Typical>
              </h5>
              <div class="mt-6 flex  justify-between w-[120px] lg:mb-0 mb-6">
                <BsFacebook className="text-3xl" />
                <BsInstagram className="text-3xl" />
                <BsWhatsapp className="text-3xl" />
              </div>
            </div>
            <div class="w-full  px-4">
              <div class="flex flex-wrap text-4xl font-bold items-top mb-1">
                Contact
              </div>
              <div className="space-y-2">
                <p className="text-xl">Moon Knights</p>
                <div className="flex text-2xl gap-1">
                  <IoCallSharp className="mt-1 text-blue-600 " />{" "}
                  <p className="text-xl">01122334455</p>
                </div>
                <div className="flex text-2xl gap-1">
                  <IoCallSharp className="mt-1 text-blue-600 " />{" "}
                  <p className="text-xl">01122334455</p>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 border-blueGray-300" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
              <div class="text-sm text-gray-300 font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span>
                <a class="text-gray-300 hover:text-gray-800" /> All rights
                reserved
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  class="text-gray-300 ml-1 hover:text-blueGray-800"
                >
                  by <span className="inline">Team API Avengers</span>
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
