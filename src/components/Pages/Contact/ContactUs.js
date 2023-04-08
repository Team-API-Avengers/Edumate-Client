import React, { useContext } from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import Typical from "react-typical";
import { motion } from "framer-motion";
import { AuthContext } from "../../Context/AuthProvider";

const ContactUs = () => {
  const { user, logUser } = useContext(AuthContext);
  console.log(logUser);
  const [state, handleSubmit] = useForm("mayzpvjq");
  if (state.succeeded) {
    toast.success("Thanks for contacting with us");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1, type: "spring", duration: 1.5 }}
    >
      <div class="flex justify-center items-center w-screen  h-screen bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-2xl">
            <div class="flex">
              <h1 class="font-bold  flex gap-2 uppercase text-4xl">
                Lets{" "}
                <Typical
                  className="text-blue-600 "
                  steps={["Talk", 3000, "discuss", 3000]}
                  loop={Infinity}
                  wrapper="p"
                ></Typical>
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="grid grid-cols-1 gap-3 md:grid-cols-2 mt-5">
                <div>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>{" "}
                  <input
                    class="w-full bg-sky-50  border border-green-400 text-gray-900 mt-0 p-3 rounded focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name*"
                    name="name"
                    defaultValue={user?.displayName}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">About</span>
                  </label>
                  <input
                    class="w-full bg-sky-50  border border-green-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                    type="text"
                    name="about"
                    placeholder="About*"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    class="w-full bg-sky-50  border border-green-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    defaultValue={user?.email}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Mobile number</span>
                  </label>
                  <input
                    class="w-full bg-sky-50 border border-green-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Number*"
                    name="number"
                    defaultValue={logUser?.number}
                  />
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <div class="">
                  <textarea
                    name="message"
                    placeholder="Message*"
                    class="w-full h-32 bg-sky-50  border border-green-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
              </div>

              <div class="my-2 w-1/2 lg:w-1/4">
                <button
                  type="submit"
                  class="uppercase text-sm font-bold tracking-wide bg-blue-600 text-gray-100 p-3 rounded w-full 
                      focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
