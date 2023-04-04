import React from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import Typical from "react-typical";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mayzpvjq");
  if (state.succeeded) {
    toast.success("Thanks for contact");
  }

  return (
    <div>
      <div class="flex justify-center items-center w-screen h-screen bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
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
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  class="w-full bg-sky-50  border border-gray-200 text-gray-900 mt-2 p-3 rounded focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                <input
                  class="w-full bg-sky-50  border border-gray-200 text-gray-900 mt-2 p-3 rounded focus:outline-none focus:shadow-outline"
                  type="text"
                  name="about"
                  placeholder="About"
                />

                <input
                  class="w-full bg-sky-50  border border-gray-200 text-gray-900 mt-2 p-3 rounded focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <input
                  class="w-full bg-sky-50 border border-gray-200 text-gray-900 mt-2 p-3 rounded focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Number"
                  name="number"
                />
              </div>
              <div class="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  class="w-full h-32 bg-sky-50  border border-gray-200 text-gray-900 mt-2 p-3 rounded focus:outline-none focus:shadow-outline"
                ></textarea>
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
    </div>
  );
};

export default ContactUs;
