import { Link } from "react-router-dom";
// import help from "../../Assets/help.png";
// import data from "../../Assets/data.png";
// import app from "../../Assets/app.png";
// import book from "../../Assets/book.png";
import { motion } from "framer-motion";
import { BsBook, BsBookFill, BsBorder, BsFunnel, BsFunnelFill, BsMicrosoft, BsPencil, BsPencilFill} from "react-icons/bs"

const SubjectWiseTeachers = () => {

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
        <div className="container grid grid-cols-2 gap-10 px-5 py-1 text-green-600  mx-auto">




          <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/Science" }>
            <a href="#g" className="group relative  block h-36">
              <span className="absolute inset-0 border-2 border-dashed rounded-b-lg border-black dark:border-white"></span>

              <div
                className="relative flex h-full transform border-b-8 rounded-b-lg border-green-600 dark:border-orange-600 items-end  bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <div
                  className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                  {/* <img className="w-14 h-12 " src={ data } alt="" /> */}
                  <BsFunnel className="w-14 h-12" />

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">Science</h2>
                </div>

                <div
                  className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                  <h3 className="mt-4 flex text-xl font-medium sm:text-2xl">
                    Science
                    <span className="mt-1 mx-2"><BsFunnelFill /></span>
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


          {/* <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/Science" }>
              <div className="card  glass grid grid-cols-1 hover:text-blue-500  border  hover:bg-white dark:bg-gray-200 border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="flex flex-col justify-center ">
                  <img className="w-14  mt-3 h-12  mx-auto" src={ data } alt="" />
                  <div className="ml-5">
                    <h2 className="mt-2  text-xl mr-4 font-bold">Science</h2>
                  </div>
                </div>
                
              </div>
            </Link>
          </motion.div> */}



          <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/Commerce" }>
            <a href="#g" className="group relative  block h-36">
              <span className="absolute inset-0 border-2 border-dashed rounded-b-lg border-black dark:border-white"></span>

              <div
                className="relative flex h-full transform border-b-8 rounded-b-lg  border-green-600 dark:border-orange-600 items-end  bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <div
                  className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                  {/* <img className="w-14 h-12 " src={ book } alt="" /> */}
                  <BsBook className="w-14 h-12 " />

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">Commerce</h2>
                </div>

                <div
                  className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                  <h3 className="mt-4 flex text-xl font-medium sm:text-2xl">
                    Commerce
                    <span className="mt-1 mx-2"><BsBookFill /></span>
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


          {/* <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/Commerce" }>
              <div className="card  glass grid grid-cols-1 hover:text-blue-500  border  hover:bg-white dark:bg-gray-200 border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="flex flex-col justify-center ">
                  <img className="w-14  mt-3 h-12  mx-auto" src={ book } alt="" />
                  <div className="ml-5">
                    <h2 className="mt-2  text-xl mr-4 font-bold">Commerce</h2>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div> */}



          <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/Arts" }>
            <a href="#g" className="group relative  block h-36">
              <span className="absolute inset-0 border-2 border-dashed rounded-b-lg border-black dark:border-white"></span>

              <div
                className="relative flex h-full transform border-b-8 rounded-b-lg  border-green-600 dark:border-orange-600 items-end  bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <div
                  className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                  {/* <img className="w-14 h-12 " src={ help } alt="" /> */}
                  <BsPencil className="w-14 h-12 " />
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">Arts</h2>
                </div>

                <div
                  className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                  <h3 className="mt-4 flex text-xl font-medium sm:text-2xl">
                    Arts
                    <span className="mt-1 mx-2"><BsPencilFill /></span>
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


          {/* <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/Arts" }>
              <div className="card  glass grid grid-cols-1 hover:text-blue-500  border  hover:bg-white dark:bg-gray-200 border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="flex flex-col justify-center ">
                  <img className="w-14  mt-3 h-12  mx-auto" src={ help } alt="" />
                  <div className="ml-5">
                    <h2 className="mt-2  text-xl mr-4 font-bold">Arts</h2>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div> */}



          <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/all-Teachers" }>
            <a href="#g" className="group relative  block h-36">
              <span className="absolute inset-0 border-2 border-dashed rounded-b-lg border-black dark:border-white"></span>

              <div
                className="relative flex h-full transform border-b-8 rounded-b-lg border-green-600 dark:border-orange-600 items-end  bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <div
                  className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                  {/* <img className="w-14 h-12 " src={ app } alt="" /> */}
                  <BsBorder className="w-14 h-12 " />
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">All Department</h2>
                </div>

                <div
                  className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                  <h3 className="mt-4 flex text-xl font-medium sm:text-2xl">
                    All Department
                    <span className="mt-1 mx-2"><BsMicrosoft /></span>
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



          {/* <motion.div
            initial={ { y: 20, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            transition={ { delay: 0.8, type: "spring", duration: 2 } }
          >
            <Link to={ "/all-Teachers" }>
              <div className="card  glass grid grid-cols-1 hover:text-blue-500  border  hover:bg-white dark:bg-gray-200 border-gray-200 p-4 h-36   hover:border-blue-500 dark:hover:bg-blue-100 ">
                <div className="flex flex-col justify-center ">
                  <img className="w-14  mt-3 h-12  mx-auto" src={ app } alt="" />
                  <div className="ml-5">
                    <h2 className="mt-2  text-xl -ml-6 font-bold">
                      All Department
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div> */}



        </div>
      </div>
    </div>
  );
};

export default SubjectWiseTeachers;
