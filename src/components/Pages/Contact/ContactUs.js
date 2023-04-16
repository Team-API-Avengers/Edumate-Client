import React, { useContext } from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import Typical from "react-typical";
import { motion } from "framer-motion";
import { AuthContext } from "../../Context/AuthProvider";
// import img from "../../Assets/contact.jpg";
const ContactUs = () => {
  const { user, logUser } = useContext(AuthContext);
  console.log(logUser);
  const [state, handleSubmit] = useForm("mayzpvjq");
  if (state.succeeded) {
    toast.success("Thanks for contact");
  }

  return (
    <div>
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
          className="flex justify-center items-center w-screen  h-screen bg-white dark:bg-[#350573] dark:text-white"
        >
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-2xl dark:bg-[#5903ca] dark:shadow-lg">
              <div className="flex">
                <h1 className="font-bold  flex gap-2 uppercase text-4xl">
                  Lets{" "}
                  <Typical
                    className="text-blue-600 dark:text-white "
                    steps={["Talk", 3000, "discuss", 3000]}
                    loop={Infinity}
                    wrapper="p"
                  ></Typical>
                </h1>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-5">
                  <div>
                    <label className="label">
                      <span className="label-text dark:text-white">Name</span>
                    </label>{" "}
                    <input
                      className="w-full border border-green-400 text-gray-900  mt-0 p-3 rounded focus:outline-none focus:shadow-outline"
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
                      className="w-full   border border-green-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      readOnly
                      defaultValue={user?.email}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text dark:text-white">Subject</span>
                    </label>
                    <input
                      className="w-full   border border-green-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                      type="text"
                      name="about"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text dark:text-white">Mobile number</span>
                    </label>
                    <input
                      className="w-full  border border-green-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
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
                      className="w-full h-32 text-gray-900 border border-green-400  p-3 rounded focus:outline-none focus:shadow-outline"
                    ></textarea>
                  </div>
                </div>

                <div className="my-2 w-1/2 lg:w-1/4">
                  <button
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-blue-600 text-gray-100 p-5 lg:p-3 rounded w-full
                      focus:outline-none focus:shadow-outline mt-6 lg:mt-0 ml-14 lg:ml-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
