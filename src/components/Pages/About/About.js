import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import Contibutors from "../Contibutors/Contibutors";
import AboutOurs from "../Home/AboutOurs/AboutOurs";

const About = () => {
  return (
    <section className="mt-8">
      <div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://www.allisonacademy.com/wp-content/uploads/2021/10/education-is-important.jpg"
              alt=""
              className="lg:max-w-lg md:max-w-full rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">About Us</h1>

              <p className="py-6">
                Tuition is a fee paid by students to educational institutions
                for instruction or guidance in a particular subject or course of
                study. The term can refer to either the fee itself or the act of
                teaching or instructing. Tuition fees can vary widely depending
                on the type of institution, the level of education, the subject
                matter, and the location.
              </p>
              <Link to="/dashboard/contact">
                <button className="btn bg-blue-600">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 ml-10 text-white">
        <div className="card  w-11/12 bg-blue-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">
              {" "}
              <BsFillTelephoneOutboundFill className="text-3xl" /> CALL US
            </h2>
            <h4 className="card-title">1 0172758244</h4>
            <h4 className="card-title">1 0172758244</h4>
          </div>
        </div>
        <div className="card w-11/12 bg-teal-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">
              {" "}
              <GoLocation className="text-3xl" /> LOCATION
            </h2>
            <h4 className="card-title">
              121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
            </h4>
          </div>
        </div>
        <div className="card w-11/12 bg-indigo-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">
              <BiTimeFive className="text-3xl" /> HOURS
            </h2>
            <h4 className="card-title">Mon – Fri : 11 am – 8 pm</h4>
            <h4 className="card-title">Sat - Sun : 6 am – 8 pm</h4>
          </div>
        </div>
      </div>
      <AboutOurs />
      <Contibutors />
    </section>
  );
};

export default About;
