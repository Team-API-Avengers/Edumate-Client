import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import AboutOurs from "../Home/AboutOurs/AboutOurs";
import Contributors from "../Contributors/Contibutors";
import logo from "../../Assets/logo.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="mt-8">
      {/* <div>
        <div className="hero bg-base-200  dark:bg-[#350573]  dark:text-[#fdfbff]">
          <div className="hero-content flex">
            <div className="mx-10">
              <h1 className="text-5xl font-bold">About Us</h1>

              <h1 className="text-start text-2xl font-bold">Overview :</h1>

              <p className="text-start">
                <span className=" font-bold">Purposes :</span> Edumate provides students with access to qualified and
                experienced tutors who specialize in different subjects. The purpose of Edumate is to provide a
                convenient and effective solution for students who need extra help with their studies. Edumate connects
                students with teachers who can help them achieve their academic goals.
              </p>

              <p className="text-start py-6">
                Tuition is a fee paid by students to educational institutions for instruction or guidance in a
                particular subject or course of study. The term can refer to either the fee itself or the act of
                teaching or instructing. Tuition fees can vary widely depending on the type of institution, the level of
                education, the subject matter, and the location.
              </p>

              <p className="text-start pt-6 font-bold">Features of the  Edumate Website :</p>
              <ul className="text-start">
                <li className="font-bold">Teacher:</li>

                <li>Authentication system with email and google.</li>
                <li>Set individual user role (Teacher & Student).</li>
                <li>Search functionally with area-wise and subject-wise.</li>

                <li className="font-bold">Student:</li>

                <li>In home page display category-wise tutor list.</li>
                <li>Tutor select & booking.</li>
                <li>Student review section for feedback and suggestion.</li>
                <li>Testimonial section.</li>
                <li>Terms and policy.</li>
                <li>About, FAQ, Blog, Contibutors.</li>
              </ul>

              <Link to="/contact">
                <button className="btn bg-blue-600 hover:bg-blue-700 border-0">Contact Us</button>
              </Link>
            </div>

            <img src={logo} alt="Edumate" className="w-full md:mx-10 rounded-lg shadow-2xl" />
          </div>
        </div>
      </div> */}

      <div>
        <div className="heros  bg-base-200 dark:bg-[#350573]  dark:text-[#fdfbff]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <motion.div
              className="mt-32 lg:mt-0"
              initial={{ y: -256 }}
              whileInView={{ y: -120 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <img src={logo} className="lg:max-w-sm md:max-w-full rounded-lg shadow-2xl" alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1, translateY: 30 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-bold  mb-8 -mt-24 lg:mt-0">About us</h1>
              <h1 className="text-start text-2xl font-bold">Overview :</h1>
              <p className="text-start">
                <span className=" font-bold">Purposes :</span> Edumate provides students with access to qualified and
                experienced tutors who specialize in different subjects. The purpose of Edumate is to provide a
                convenient and effective solution for students who need extra help with their studies. Edumate connects
                students with teachers who can help them achieve their academic goals.
              </p>

              <p className="text-start py-6">
                Tuition is a fee paid by students to educational institutions for instruction or guidance in a
                particular subject or course of study. The term can refer to either the fee itself or the act of
                teaching or instructing. Tuition fees can vary widely depending on the type of institution, the level of
                education, the subject matter, and the location.
              </p>

              <p className="text-start pt-6 font-bold">Features of the  Edumate Website :</p>
              <ul className="text-start">
                <li>Authentication system with email and google.</li>
                <li>Set individual user role (Teacher & Student).</li>
                <li>Search functionally with area-wise and subject-wise.</li>
                <li>Testimonial section.</li>
                <li>Terms and policy.</li>
                <li>About, FAQ, Blog, Contibutors.</li>
              </ul>

              <ul className="text-start mb-8">
                <li className="font-bold">Teacher:</li>

                <li>A teacher can see his students in his dashboard.</li>

                <li className="font-bold">Student:</li>

                <li>Search functionally for finding tutors with area-wise.</li>
                <li>In home page display subject-wise tutor list.</li>
                <li>Tutor select & booking.</li>
                <li>Student can give his feedback and suggestion.</li>
                <li>Student can pay with payment system for his tutor.</li>
              </ul>

              <Link to="/contact">
                <button className="btn bg-blue-600 hover:bg-blue-700 border-0 mb-10">Contact Us</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <AboutOurs></AboutOurs>

      <Contributors />

      <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 m-10 text-white">
        <div className="card  w-11/12 bg-blue-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">
              <BsFillTelephoneOutboundFill className="text-3xl" /> CALL US
            </h2>
            <h4 className="card-title">1 0172758244</h4>
            <h4 className="card-title">1 0172758244</h4>
          </div>
        </div>
        <div className="card w-11/12 bg-teal-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">
              <GoLocation className="text-3xl" /> LOCATION
            </h2>
            <h4 className="card-title">121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</h4>
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
    </section>
  );
};

export default About;
