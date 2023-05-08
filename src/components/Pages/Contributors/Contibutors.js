import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Contributors = () => {
  return (
    <div>
      <section className=" pb-10   dark:text-[#350573] m-10 lg:pb-20">
        <div className="container mx-auto">
          <motion.div
            className="-mx-4 flex flex-wrap"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 10 }}
          >
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span id="title" className="text-[#1AA3D0] dark:text-[#00A99D] mb-2 block text-4xl font-bold">
                  Our Awesome Team Members
                </span>
                <h2 className=" mb-4 text-xl font-bold text-dark dark:text-gray-300">
                  Project - <span className="text-[#00A99D] dark:text-[#1AA3D0]">Contributors</span>
                </h2>
                <p className="text-body-color text-base dark:text-gray-300">Together, we build something amazing</p>
              </div>
            </div>
          </motion.div>

          <div className="-mx-3 flex flex-wrap justify-center">
            <motion.div
              className="w-full px-4 md:w-1/2 xl:w-1/3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg  border border-green-100 hover:shadow-2xl cursor-pointer">
                  <img
                    src="https://i.ibb.co/y4mCHG8/247348789-2981718772092667-3655152680050390712-n.jpg"
                    alt="image"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                      <h3 className="text-dark text-base font-semibold">MD Hasan</h3>
                      <p className="text-body-color font-bold text-[#1AA3D0] dark:text[#00A99D]">Team Leader</p>
                      <p className="flex justify-center mt-1">
                        <a href="https://www.facebook.com/ornilhasan0467/">
                          <BsFacebook className="mx-2" />
                        </a>
                        <a href="https://www.linkedin.com/in/md-hasan149357">
                          <BsLinkedin className="mx-2" />
                        </a>
                        <a href="https://github.com/MdHasan0467">
                          <BsGithub className="mx-2" />
                        </a>
                      </p>
                      <div>
                        <span className="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="16" cy="45" r="45" fill="#00FFBF" fillOpacity="0.11" />
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full px-4 md:w-1/2 xl:w-1/3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg  border border-green-100 hover:shadow-2xl cursor-pointer">
                  <img
                    // src="https://i.ibb.co/zJWMfbz/myphotoinlibrary.jpg"
                    src="https://i.ibb.co/YQQyy7W/IMG-20220115-WA0002.jpg"
                    alt="image"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                      <h3 className="text-dark text-base font-semibold">Yusuf Bin Imam</h3>
                      <p className="text-body-color font-bold text-[#1AA3D0] dark:text[#00A99D]">Front End Developer</p>
                      <p className="flex justify-center mt-1">
                        <a href="https://www.facebook.com/profile.php?id=100032670966425">
                          <BsFacebook className="mx-2" />
                        </a>
                        <a href="https://www.linkedin.com/in/yusuf-bin-imam/">
                          <BsLinkedin className="mx-2" />
                        </a>
                        <a href="https://github.com/RedEye75">
                          <BsGithub className="mx-2" />
                        </a>
                      </p>
                      <div>
                        <span className="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="16" cy="45" r="45" fill="#00FFBF" fillOpacity="0.11" />
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full px-4 md:w-1/2 xl:w-1/3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg  border border-green-100 hover:shadow-2xl cursor-pointer">
                  <img
                    src="https://i.ibb.co/YWNnnR1/IMG20220806224604.jpg"
                    className="w-full h-80 object-cover"
                    alt="SarwarImage"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                      <h3 className="text-dark text-base font-semibold">Sarwar Jaman Tuhin</h3>
                      <p className="text-body-color font-bold text-[#1AA3D0] dark:text[#00A99D]">UI/UX Designer</p>
                      <p className="flex justify-center mt-1">
                        <a href="https://www.facebook.com/sarwar902tuhin/">
                          <BsFacebook className="mx-2" />
                        </a>
                        <a href="www.linkedin.com/in/tuhin902">
                          <BsLinkedin className="mx-2" />
                        </a>
                        <a href="https://github.com/tuhin902">
                          <BsGithub className="mx-2" />
                        </a>
                      </p>
                      <div>
                        <span className="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="16" cy="45" r="45" fill="#00FFBF" fillOpacity="0.11" />
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full px-4 md:w-1/2 xl:w-1/3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg  border border-green-100 hover:shadow-2xl cursor-pointer">
                  <img
                    src="https://i.ibb.co/cLR4SbW/333645415-894931498399824-4912192106769774471-n-1.png"
                    alt="image"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                      <h3 className="text-dark text-base font-semibold">Atiq Hasan</h3>
                      <p className="text-body-color font-bold text-[#1AA3D0] dark:text[#00A99D]">
                        UI & Animation Designer
                      </p>
                      <p className="flex justify-center mt-1">
                        <a href="">
                          <BsFacebook className="mx-2" />
                        </a>
                        <a href="https://www.linkedin.com/in/atik94">
                          <BsLinkedin className="mx-2" />
                        </a>
                        <a href="">
                          <BsGithub className="mx-2" />
                        </a>
                      </p>
                      <div>
                        <span className="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="16" cy="45" r="45" fill="#00FFBF" fillOpacity="0.11" />
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full px-4 md:w-1/2 xl:w-1/3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg  border border-green-100 hover:shadow-2xl cursor-pointer">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-04.jpg"
                    alt="image"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                      <h3 className="text-dark text-base font-semibold">MD Siyam Al Rafi</h3>
                      <p className="text-body-color font-bold text-[#1AA3D0] dark:text[#00A99D]">Backend Developer</p>
                      <p className="flex justify-center mt-1">
                        <a href="">
                          <BsFacebook className="mx-2" />
                        </a>
                        <a href="https://www.linkedin.com/in/siamalrafi0/">
                          <BsLinkedin className="mx-2" />
                        </a>
                        <a href="https://github.com/siamalrafi">
                          <BsGithub className="mx-2" />
                        </a>
                      </p>
                      <div>
                        <span className="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="16" cy="45" r="45" fill="#0BDFAA" fillOpacity="0.11" />
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full px-4 md:w-1/2 xl:w-1/3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg  border border-green-100 hover:shadow-2xl cursor-pointer">
                  <img
                    src="https://i.ibb.co/RP3ykJv/340304702-244102374760260-335549393422060098-n.jpg"
                    alt="image"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                      <h3 className="text-dark text-base font-semibold">Ashikur Rahman Emon</h3>
                      <p className="text-body-color font-bold text-[#1AA3D0] dark:text[#00A99D]">Backend Developer</p>
                      <p className="flex justify-center mt-1">
                        <a href="">
                          <BsFacebook className="mx-2" />
                        </a>
                        <a href="">
                          <BsLinkedin className="mx-2" />
                        </a>
                        <a href="">
                          <BsGithub className="mx-2" />
                        </a>
                      </p>
                      <div>
                        <span className="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="16" cy="45" r="45" fill="#00FFBF" fillOpacity="0.11" />
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributors;
