import React, { useContext } from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import Typical from "react-typical";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import ContactAnimation from "../../Assets/Animation/contact2.json";
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
    <div className="mb-20 lg:mb-5">
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
          className="flex justify-center items-center w-screen  h-screen rounded-none bg-white dark:bg-black dark:text-[#0056F7]"
        >
          <div className="container mx-auto my-4 px-4 ">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-8  md:px-5  lg:w-5/6 lg:pl-20 lg:pr-20 mx-auto shadow-2xl dark:shadow-none bg-transparent">
              <div className="flex flex-col mt-5">
                {/* Auto Typing Test */}
                <h1 className="font-bold  flex gap-2 uppercase text-4xl dark:text-gray-300">
                  Lets
                  <Typical
                    className="text-[#1AA3D0] dark:text-[#00A99D] "
                    steps={["Talk", 3000, "discuss", 3000]}
                    loop={Infinity}
                    wrapper="p"
                  ></Typical>
                </h1>

                {/* Animation */}
                <div className="mt-10">
                  <Lottie className="w-full" animationData={ContactAnimation} loop={true}></Lottie>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-5">
                    <div>
                      <label className="label">
                        <span className="label-text dark:text-[#00A99D]">Name</span>
                      </label>
                      <input
                        className="w-full border-2  border-[#1AA3D0] dark:border-none  text-gray-900  mt-0 p-3 rounded-full focus:border-[#00A99D]"
                        type="text"
                        name="name"
                        readOnly
                        defaultValue={user?.displayName}
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text dark:text-[#00A99D]">Email</span>
                      </label>
                      <input
                        className="w-full  border-2  border-[#1AA3D0] dark:border-none  text-gray-900  p-3 rounded-full focus:border-[#00A99#00A99D"
                        type="email"
                        name="email"
                        readOnly
                        defaultValue={user?.email}
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text dark:text-[#00A99D]">Subject / Issues</span>
                      </label>
                      <input
                        className="w-full   border-2  border-[#1AA3D0] dark:border-none  text-gray-900  p-3 rounded-full focus:outline-none focus:border-[#00A99D]"
                        type="text"
                        name="about"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text dark:text-[#00A99D]">Mobile number</span>
                      </label>
                      <input
                        className="w-full  border-2  border-[#1AA3D0] dark:border-none  text-gray-900  p-3 rounded-full focus:outline-none focus:border-[#00A99D]"
                        type="text"
                        name="number"
                        placeholder="Number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text dark:text-[#00A99D]">Message</span>
                    </label>
                    <div className="">
                      <textarea
                        name="message"
                        placeholder="Message"
                        required
                        className="w-full h-32 text-gray-900  dark:border-none  border-2  border-[#1AA3D0]  p-3 rounded focus:outline-none focus:border-[#00A99D]"
                      ></textarea>
                    </div>
                  </div>

                  <div className="my-2 w-full ">
                    <button
                      type="submit"
                      className="uppercase text-sm font-bold tracking-wide bg-[#1AA3D0] dark:bg-[#00A99D] dark:hover:bg-[#1AA3D0] text-gray-100 p-5 lg:p-3 rounded-full w-full
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
