import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BsBook,
  BsBookFill,
  BsBorder,
  BsFunnel,
  BsFunnelFill,
  BsMicrosoft,
  BsPencil,
  BsPencilFill,
} from "react-icons/bs";

const SubjectWiseTeachers = () => {
  return (
    <div className="mt-8">
      <motion.h1
        id="title"
        className="text-4xl font-bold -mt-8 lg:mt-0 text-[#1aa3d0] dark:text-[#1aa3d0]"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", duration: 2 }}
      >
        Department
      </motion.h1>
      <motion.p
        className="mt-2 text-2xl lg:text-dark dark:text-[#DBDBDB]"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", duration: 2 }}
      >
        Select which department you need a teacher for
      </motion.p>
      {/* {backgrounds.map((category) => ( */}
      <div className=" max-w-screen-lg mt-10 mb-10 mx-auto grid grid-cols-1">
        <div className="container grid grid-cols-1 lg:grid-cols-4 gap-10 px-5 py-1  text-[#1aa3d0]  dark:text-[#1aa3d0] mx-auto">
          {/* Science Department */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", duration: 2 }}
          >
            <Link to={"/Science"}>
              <a href="#g" className="group relative block h-36 ">
                <span className="absolute inset-0 border-2 border-dashed rounded-b-lg border-black dark:border-white"></span>

                <div className="relative flex h-full transform border-b-8 rounded-b-lg text-white bg-[#00A99D] border-[#0f766e] dark:border-[#0f766e] items-end transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                    {/* <img className="w-14 h-12 " src={ data } alt="" /> */}
                    <BsFunnel className="w-14 h-12" />

                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">Science</h2>
                  </div>

                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 flex text-xl font-medium sm:text-2xl">
                      Science
                      <span className="mt-1 mx-2">
                        <BsFunnelFill />
                      </span>
                    </h3>

                    {/* <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                    praesentium voluptatem omnis atque culpa repellendus.
                  </p> */}

                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </a>
            </Link>
          </motion.div>

          {/* Commerce Department */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", duration: 2 }}
          >
            <Link to={"/Commerce"}>
              <a href="#g" className="group relative  block h-36">
                <span className="absolute inset-0 border-2 border-dashed rounded-b-lg border-black dark:border-white"></span>

                <div className="relative flex h-full transform border-b-8 rounded-b-lg  text-white bg-[#00A99D] border-[#0f766e] dark:border-[#0f766e] items-end transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                    {/* <img className="w-14 h-12 " src={ book } alt="" /> */}
                    <BsBook className="w-14 h-12 " />

                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">Commerce</h2>
                  </div>

                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 flex text-xl font-medium sm:text-2xl">
                      Commerce
                      <span className="mt-1 mx-2">
                        <BsBookFill />
                      </span>
                    </h3>

                    {/* <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                    praesentium voluptatem omnis atque culpa repellendus.
                  </p> */}

                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </a>
            </Link>
          </motion.div>

          {/* Arts Department */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", duration: 2 }}
          >
            <Link to={"/Arts"}>
              <a href="#g" className="group relative  block h-36">
                <span className="absolute inset-0 border-2 border-dashed rounded-b-lg border-black dark:border-white"></span>

                <div className="relative flex h-full transform border-b-8 rounded-b-lg  text-white bg-[#00A99D] border-[#0f766e] dark:border-[#0f766e] items-end  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                    {/* <img className="w-14 h-12 " src={ help } alt="" /> */}
                    <BsPencil className="w-14 h-12 " />
                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">Arts</h2>
                  </div>

                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 flex text-xl font-medium sm:text-2xl">
                      Arts
                      <span className="mt-1 mx-2">
                        <BsPencilFill />
                      </span>
                    </h3>

                    {/* <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                    praesentium voluptatem omnis atque culpa repellendus.
                  </p> */}

                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </a>
            </Link>
          </motion.div>

          {/* All Department */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", duration: 2 }}
          >
            <Link to={"/all-Teachers"}>
              <a href="#g" className="group relative block h-36">
                <span className="absolute inset-0 border-2 border-dashed rounded-b-lg border-black dark:border-white"></span>

                <div className="relative flex h-full transform border-b-8 rounded-b-lg text-white bg-[#00A99D] border-[#0f766e] dark:border-[#0f766e] items-end transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0">
                    <BsBorder className="w-14 h-12" />
                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">All Department</h2>
                  </div>

                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 flex text-xl font-medium sm:text-2xl">
                      All
                      <span className="mt-1 mx-2">
                        <BsMicrosoft />
                      </span>
                    </h3>

                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SubjectWiseTeachers;
