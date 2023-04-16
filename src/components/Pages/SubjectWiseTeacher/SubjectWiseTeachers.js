import SubjectWiseTeacher from "./SubjectWiseTeacher";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import science from "../../Assets/science.png";
import commerce from "../../Assets/commerce.png";
import help from "../../Assets/help.png";
import data from "../../Assets/data.png";
import app from "../../Assets/app.png";
import book from "../../Assets/book.png";
import humanity from "../../Assets/humanity.png";
import all from "../../Assets/all.png";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

const SubjectWiseTeachers = () => {
  // const [backgrounds, setBackground] = useState([]);
  // useEffect(() => {
  //   fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`).then((res) =>
  //     res.json().then((data) => setBackground(data?.data))
  //   );
  // }, []);

  // const { loading } = useContext();
  return (
    <div className="mt-8">
      <motion.h1
        className="text-3xl font-bold -mt-8 lg:mt-0"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", duration: 2 }}
      >
        Department
      </motion.h1>
      <motion.p
        className="mt-2 text-2xl lg:text-base"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", duration: 2 }}
      >
        Select which department you need a teacher for
      </motion.p>
      {/* {backgrounds.map((category) => ( */}
      <div className=" max-w-screen-lg mt-10 mb-10 mx-auto">
        <div class="container grid grid-cols-4 gap-10 px-5 py-1 dark:text-[#350573]  mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", duration: 2 }}
          >
            <Link to={"/Science"}>
              <div class=" grid grid-cols-1 hover:text-blue-500 rounded-lg border  hover:bg-white border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="">
                  <img
                    className="w-14  mt-3 h-12 ml-[60px] "
                    src={data}
                    alt=""
                  />
                  <div className="ml-5">
                    <h2 class="mt-2 mr-[25px] text-xl font-bold">Science</h2>
                  </div>
                </div>
                {/* <div className="-ml-6">
                  <IoIosArrowForward />
                </div> */}
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", duration: 2 }}
          >
            <Link to={"/Commerce"}>
              <div class=" grid grid-cols-1 hover:text-blue-500 rounded-lg border  hover:bg-white border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="">
                  <img
                    className="w-14  mt-3 h-12 ml-[60px] "
                    src={book}
                    alt=""
                  />
                  <div className="ml-5">
                    <h2 class="mt-2 mr-[25px] text-xl font-bold">Commerce</h2>
                  </div>
                </div>
                {/* <div className="-ml-6">
                  <IoIosArrowForward />
                </div> */}
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", duration: 2 }}
          >
            <Link to={"/Arts"}>
              <div class=" grid grid-cols-1 hover:text-blue-500 rounded-lg border  hover:bg-white border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="">
                  <img
                    className="w-14  mt-3 h-12 ml-[60px] "
                    src={help}
                    alt=""
                  />
                  <div className="ml-5">
                    <h2 class="mt-2 mr-[25px] text-xl font-bold">Arts</h2>
                  </div>
                </div>
                {/* <div className="-ml-6">
                  <IoIosArrowForward />
                </div> */}
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", duration: 2 }}
          >
            <Link to={"/all-Teachers"}>
              <div class=" grid grid-cols-1 hover:text-blue-500 rounded-lg border  hover:bg-white border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="">
                  <img
                    className="w-14  mt-3 h-12 ml-[60px] "
                    src={app}
                    alt=""
                  />
                  <div className="ml-5">
                    <h2 class="mt-2 text-center -ml-5 text-xl font-bold">
                      All Department
                    </h2>
                  </div>
                </div>
                {/* <div className="-ml-6">
                  <IoIosArrowForward />
                </div> */}
              </div>
            </Link>
          </motion.div>
          {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", duration: 1.5 }}
          >
            <Link to={"/Science"}>
              <div class=" flex justify-between items-center rounded-lg border bg-white border-gray-200 p-4 h-36 hover:border-blue-500 dark:hover:bg-blue-100">
                <div className="lg:flex">
                  <img
                    className="w-14 mt-3 h-12 ml-6 lg:ml-0"
                    src={science}
                    alt=""
                  />
                  <div className="ml-5">
                    <h2 class="mt-2 text-start  text-xl font-bold">Science</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      10 teachers available
                    </p>
                  </div>
                </div>
                <div className="-ml-6">
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>
          </motion.div> */}
          {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", duration: 2 }}
          >
            <Link to={"/Commerce"}>
              <div class=" flex justify-between items-center rounded-lg border  bg-white border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="lg:flex">
                  <img
                    className="w-14 mt-3 h-12 ml-6 lg:ml-0"
                    src={commerce}
                    alt=""
                  />
                  <div className="ml-5">
                    <h2 class="mt-2 text-start  text-xl font-bold">Commerce</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      10 teachers available
                    </p>
                  </div>
                </div>
                <div className="-ml-6">
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>
          </motion.div> */}
          {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring", duration: 2.3 }}
          >
            <Link to={"/Arts"}>
              <div class=" flex justify-between items-center rounded-lg  border bg-white border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="lg:flex">
                  <img
                    className="w-14 mt-3 h-12 ml-6 lg:ml-0"
                    src={humanity}
                    alt=""
                  />
                  <div className="ml-5">
                    <h2 class="mt-2 text-start  text-xl font-bold">Arts</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      10 teachers available
                    </p>
                  </div>
                </div>
                <div className="-ml-6">
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, type: "spring", duration: 2.5 }}
          >
            <Link to={"/all-Teachers"}>
              <div class=" flex justify-between items-center rounded-lg border bg-white dark:text-[#350573] border-gray-200 p-4 h-36 hover:border-blue-500 dark:hover:bg-blue-100">
                <div className="lg:flex">
                  <img
                    className="w-14 mt-3 h-12 ml-6 lg:ml-0"
                    src={all}
                    alt=""
                  />
                  <div className="ml-5">
                    <h2 class="mt-2 text-start  text-xl font-bold">
                      All Department
                    </h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      10 teachers available
                    </p>
                  </div>
                </div>
                <div className="-ml-6">
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>
          </motion.div> */}
        </div>

        {/* {teachers.map((teacher, i) => (
          <SubjectWiseTeacher key={i} teacher={teacher}></SubjectWiseTeacher>
        ))} */}
      </div>
      {/* ))} */}
    </div>
  );
};

export default SubjectWiseTeachers;
