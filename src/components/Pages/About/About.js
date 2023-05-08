import React from "react";
import { Link } from "react-router-dom";
import Contributors from "../Contributors/Contibutors";
import { motion } from "framer-motion";
import AboutOurs from "./AboutOurs";
import Posts from "../Home/Posts";
import PostsForMobile from "../Home/PostsForMobile";

const About = () => {
  return (
    <section className="mt-8">
      <div className="mt-28">
        <div>
          <motion.h1
            id="title"
            className=" text-5xl font-bold mb-8 text-[#1AA3D0] dark:text-[#00A99D]"
            initial={{ y: -80 }}
            whileInView={{ y: -20 }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="w-1/2 mx-auto dark:text-gray-300"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: -20, opacity: 1 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Tuition is a fee paid by students to educational institutions for instruction or guidance in a particular
            subject or course of study. The term can refer to either the fee itself or the act of teaching or
            instructing.
          </motion.p>
        </div>

        <div className="hero mt-10">
          <div className="hero-content flex-col lg:flex-row gap-12">
            <motion.img
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 5, opacity: 1 }}
              transition={{ type: "spring", stiffness: 20 }}
              className="w-full lg:w-1/2 rounded-full"
              src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
              alt=""
            />
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: -5, opacity: 1 }}
              transition={{ type: "spring", stiffness: 20 }}
            >
              <h3 className="text-center lg:text-start text-2xl mb-4 font-bold text-[#1AA3D0] dark:text-[#00A99D]">
                Why Choose Us
              </h3>
              <h1 id="title" className="text-4xl font-bold text-start text-gray-700 dark:text-gray-300">
                Learn Something Good, Do Something Better!
              </h1>
              <p className="py-6 text-start dark:text-gray-300">
                Edumate provides students with access to qualified and experienced tutors who specialize in different
                subjects. The purpose of Edumate is to provide a convenient and effective solution for students who need
                extra help with their studies. Edumate connects students with teachers who can help them achieve their
                academic goals
              </p>
              <div className="text-start">
                <Link to="/">
                  <button className="btn btn-primary mr-4 rounded-full bg-[#1AA3D0] dark:bg-[#00A99D]">Go Home</button>
                </Link>
                <Link to="/contact">
                  <button className="btn btn-primary mr-4 rounded-full bg-[#1AA3D0] dark:bg-[#00A99D]">
                    Contact us
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="heros  bg-base-200 dark:bg-black dark:text-[#bb86fc]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <motion.div
              className="mt-32 lg:mt-0"
              initial={{ y: -256 }}
              whileInView={{ y: -120 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <img
                src={logo}
                className="lg:max-w-sm md:max-w-full rounded-lg shadow-2xl"
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1, translateY: 30 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-bold  mb-8 -mt-24 lg:mt-0">
                About us
              </h1>
              <h1 className="text-start text-2xl font-bold">Overview :</h1>
              <p className="text-start">
                <span className=" font-bold">Purposes :</span> Edumate provides
                students with access to qualified and experienced tutors who
                specialize in different subjects. The purpose of Edumate is to
                provide a convenient and effective solution for students who
                need extra help with their studies. Edumate connects students
                with teachers who can help them achieve their academic goals.
              </p>

              <p className="text-start py-6">
                Tuition is a fee paid by students to educational institutions
                for instruction or guidance in a particular subject or course of
                study. The term can refer to either the fee itself or the act of
                teaching or instructing. Tuition fees can vary widely depending
                on the type of institution, the level of education, the subject
                matter, and the location.
              </p>

              <p className="text-start pt-6 font-bold">
                Features of the  Edumate Website :
              </p>
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
                <button className="btn bg-blue-600 hover:bg-blue-700 border-0 mb-10">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div> */}

      <AboutOurs></AboutOurs>

      <Posts />

      {/* <PostsForMobile /> */}

      <Contributors />
    </section>
  );
};

export default About;
