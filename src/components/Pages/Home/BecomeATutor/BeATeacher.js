import React from "react";
import image from "../../../Assets/beateacher2.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

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
  return (
    <div>
      <div class="container dark:bg-black  dark:text-white px-6 py-16 max-w-screen-xl mx-auto">
        <div class=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <motion.div
            class="w-full "
            initial={{ x: -250 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              class="text-start"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-5xl  font-bold text-blue-600"
                variants={childVariants}
              >
                Become a tutor
              </motion.h1>

              <motion.p
                class="mt-3 w-1/2 font-bold text-black dark:text-white"
                variants={childVariants}
              >
                Instructors from around the country teach hundreds of students
                on
                <span className="font-bold text-blue-600"> Edumate</span> .
                Inspire Minds, Shape Futures, Join the Teaching Profession.
              </motion.p>

              <Link to={"/dashboard/add-Teacher"}>
                <div class="flex mt-5">
                  <motion.button
                    class="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-500"
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                      <BsArrowRight />
                    </span>

                    <span class="text-sm font-medium transition-all group-hover:mr-4">
                    Get Started Your Career
                    </span>
                  </motion.button>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            class="flex items-center justify-center w-full mt-6 lg:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, type: "spring", duration: 3 }}
          >
            <img
              class="w-full h-full lg:max-w-3xl"
              src={image}
              alt="Catalogue-pana.svg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BeATeacher;
