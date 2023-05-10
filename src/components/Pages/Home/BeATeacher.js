import React from "react";
// import darkImage from "../../../Assets/BeATutorImage.png";
// import image from "../../../Assets/BeATutorImage2.png";
// import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
// import { AuthContext } from "../../../Context/AuthProvider";
import ReviewAnimation from "../../Assets/Animation/Teacher.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const BeATeacher = () => {
  // const { theme } = useContext(AuthContext);
  return (
    <div>
      <div className="container dark:bg-black px-16 py-16 max-w-screen-xl mx-auto">
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <motion.div
            className="w-full mt-7 "
            initial={{ x: -250 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div className="text-start" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h1
                id="title"
                className="text-5xl  font-bold text-[#1AA3D0] dark:text-[#1AA3D0]"
                variants={childVariants}
              >
                Become a tutor
              </motion.h1>

              <motion.p
                className="mt-3 w-full lg:w-1/2 font-bold text-black dark:text-[#DBDBDB]"
                variants={childVariants}
              >
                Instructors from around the country teach hundreds of students on
                <span className="font-bold text-[#00A99D] dark:text-[#00A99D]"> Edumate</span> . Inspire Minds, Shape
                Futures, Join the Teaching Profession.
              </motion.p>

              {/* Button */}
            </motion.div>
            <Link
              to={"/dashboard/tutor-test-question"}
              className="group relative inline-flex items-center overflow-hidden justify-start rounded bg-[#1AA3D0] dark:bg-[#1AA3D0] px-8 mt-5 py-3 text-white focus:outline-none focus:ring active:bg-blue-500"
            >
              <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <BsArrowRight />
              </span>

              <span className="text-sm font-bold transition-all group-hover:mr-4">Start teaching today</span>
            </Link>
          </motion.div>




           {/* Animation */}
          <motion.div
            // className="flex items-center justify-center w-full mt-6 lg:mt-0"
            className="lg:-mt-16 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, type: "spring", duration: 3 }}
          >
            <div>
              <Lottie animationData={ReviewAnimation} loop={true}></Lottie>
            </div>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
};

export default BeATeacher;
