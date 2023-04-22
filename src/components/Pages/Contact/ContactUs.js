import React, { useContext } from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import Typical from "react-typical";
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import ContactAnimation from '../../Assets/Animation/ContacAnimation.json';
import { AuthContext } from "../../Context/AuthProvider";
// import img from "../../Assets/contact.jpg";
const ContactUs = () => {
  const { user } = useContext(AuthContext);
  // console.log(logUser);
  const [state, handleSubmit] = useForm("mayzpvjq");
  if (state.succeeded) {
    toast.success("Thanks for contact");
  }

  return (
    <div className="mb-5">

      {/* <img src={img} className="w-1/2" alt="" /> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, type: "spring", duration: 1.5 }}
      >
        <div
          // style={{
          //   backgroundImage: `url(${img})`,
          // }}
          className="flex justify-center items-center w-screen  h-screen rounded-none bg-white dark:bg-gradient-to-r from-[#1e2f37] via-[#15803d] to-[#1e2f37] dark:text-white"
        >

          <div className="container mx-auto my-4 px-4 ">
            
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-8  md:px-5  lg:w-5/6 lg:pl-20 lg:pr-20 mx-auto shadow-2xl dark:shadow-none bg-transparent">
              <div className="flex flex-col mt-5">

                <h1 className="font-bold  flex gap-2 uppercase text-4xl">
                  Lets{" "}
                  <Typical
                    className="text-blue-600 dark:text-white "
                    steps={["Talk", 3000, "discuss", 3000]}
                    loop={Infinity}
                    wrapper="p"
                  ></Typical>
                </h1>
                <div className="">
                  <Lottie className='w-full' animationData={ContactAnimation} loop={true}></Lottie>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-5">
                    <div>
                      <label className="label">
                        <span className="label-text dark:text-white">Name</span>
                      </label>{" "}
                      <input
                        className="w-full border border-t-0 border-blue-400 text-gray-900  mt-0 p-3 rounded focus:outline-none focus:shadow-outline"
                        type="text"
                        name="name"
                        readOnly
                        defaultValue={user?.displayName}
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text dark:text-white">Email</span>
                      </label>
                      <input
                        className="w-full   border border-t-0 border-blue-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        readOnly
                        defaultValue={user?.email}
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text dark:text-white">
                          Subject
                        </span>
                      </label>
                      <input
                        className="w-full   border border-t-0 border-blue-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                        type="text"
                        name="about"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text dark:text-white">
                          Mobile number
                        </span>
                      </label>
                      <input
                        className="w-full  border border-t-0 border-blue-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                        type="text"
                        name="number"
                        placeholder="Number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text dark:text-white">Message</span>
                    </label>
                    <div className="">
                      <textarea
                        name="message"
                        placeholder="Message"
                        required
                        className="w-full h-32 text-gray-900 border border-t-0 border-blue-400  p-3 rounded focus:outline-none focus:shadow-outline"
                      ></textarea>
                    </div>
                  </div>

                  <div className="my-2 w-full lg:w-2/4">
                    <button
                      type="submit"
                      className="uppercase text-sm font-bold tracking-wide bg-blue-600 text-gray-100 p-5 lg:p-3 rounded w-full
                      focus:outline-none focus:shadow-outline mt-6 lg:mt-0 lg:ml-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
