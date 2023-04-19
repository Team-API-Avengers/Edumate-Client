// import SubjectWiseTeacher from "./SubjectWiseTeacher";
import { Link } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
// import science from "../../Assets/science.png";
// import commerce from "../../Assets/commerce.png";
import help from "../../Assets/help.png";
import data from "../../Assets/data.png";
import app from "../../Assets/app.png";
import book from "../../Assets/book.png";
// import humanity from "../../Assets/humanity.png";
// import all from "../../Assets/all.png";
// import { useContext, useEffect, useState } from "react";
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
        initial={ { y: -20, opacity: 0 } }
        whileInView={ { y: 0, opacity: 1 } }
        transition={ { delay: 1, type: "spring", duration: 2 } }
      >
        Department
      </motion.h1>
      <motion.p
        className="mt-2 text-2xl lg:text-base"
        initial={ { y: 20, opacity: 0 } }
        whileInView={ { y: 0, opacity: 1 } }
        transition={ { delay: 1, type: "spring", duration: 2 } }
      >
        Select which department you need a teacher for
      </motion.p>
      {/* {backgrounds.map((category) => ( */ }
      <div className=" max-w-screen-lg mt-10 mb-10 mx-auto grid grid-cols-1">
        <div className="container grid lg:grid-cols-4 grid-cols-2 gap-10 px-5 py-1 dark:text-[#350573]  mx-auto">
          <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/Science" }>
              <div className=" grid grid-cols-1 hover:text-blue-500  border  hover:bg-white dark:bg-gray-200 border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="flex flex-col justify-center ">
                  <img className="w-14  mt-3 h-12  mx-auto" src={ data } alt="" />
                  <div className="ml-5">
                    <h2 className="mt-2  text-xl mr-4 font-bold">Science</h2>
                  </div>
                </div>
                {/* <div className="-ml-6">
                  <IoIosArrowForward />
                </div> */}
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/Commerce" }>
              <div className=" grid grid-cols-1 hover:text-blue-500  border  hover:bg-white dark:bg-gray-200 border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="flex flex-col justify-center ">
                  <img className="w-14  mt-3 h-12  mx-auto" src={ book } alt="" />
                  <div className="ml-5">
                    <h2 className="mt-2  text-xl mr-4 font-bold">Commerce</h2>
                  </div>
                </div>
                {/* <div className="-ml-6">
                  <IoIosArrowForward />
                </div> */}
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/Arts" }>
              <div className=" grid grid-cols-1 hover:text-blue-500  border  hover:bg-white dark:bg-gray-200 border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="flex flex-col justify-center ">
                  <img className="w-14  mt-3 h-12  mx-auto" src={ help } alt="" />
                  <div className="ml-5">
                    <h2 className="mt-2  text-xl mr-4 font-bold">Arts</h2>
                  </div>
                </div>
                {/* <div className="-ml-6">
                  <IoIosArrowForward />
                </div> */}
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/all-Teachers" }>
              <div className=" grid grid-cols-1 hover:text-blue-500  border  hover:bg-white dark:bg-gray-200 border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="flex flex-col justify-center ">
                  <img className="w-14  mt-3 h-12  mx-auto" src={ app } alt="" />
                  <div className="ml-5">
                    <h2 className="mt-2  text-xl -ml-6 font-bold">
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
        </div>
      </div>
    </div>
  );
};

export default SubjectWiseTeachers;
