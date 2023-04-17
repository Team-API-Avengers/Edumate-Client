import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import blog from "../../Assets/blogLogo.png";
import feedback from "../../Assets/satisfaction.png";
import contact from "../../Assets/telephone.png";

import { AuthContext } from "../../Context/AuthProvider";

const Error = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 ">
        <div class="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
          <div class="w-full ">
            <div class="flex flex-col items-center max-w-lg mx-auto text-center">
              <p class="text-sm font-medium text-blue-500 dark:text-blue-400">
                404 error
              </p>
              <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                We lost this page
              </h1>
              <p class="mt-4 text-gray-500 dark:text-gray-400">
                We searched high and low, but couldn’t find what you’re looking
                for.Let’s find a better place for you to go.
              </p>
              <Link to={"/"}>
                <button class=" px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 mt-3 shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                  Take me home
                </button>
              </Link>
            </div>

            <div class="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
              <div class="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
                <h3 class="mt-6  text-gray-800 font-bold dark:text-gray-200 ">
                  <img className="w-12 flex mx-auto" src={contact} alt="" />
                  Contact Us
                </h3>

                <p class="mt-2 text-gray-500 dark:text-gray-400 ">
                  Connect with us and thrive.
                </p>

                <Link
                  to={"/contact"}
                  class="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>Lets Connect</span>

                  <BsArrowRight className="text-lg " />
                </Link>
              </div>
              <div class="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
                <h3 class="mt-6  text-gray-800 font-bold dark:text-gray-200 ">
                  <img className="w-12 flex mx-auto" src={blog} alt="" />
                  Our blog
                </h3>

                <p class="mt-2 text-gray-500 dark:text-gray-400 ">
                  Read the latest posts on our blog
                </p>

                <Link
                  to={"/blog"}
                  class="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>View latest posts</span>

                  <BsArrowRight className="text-lg " />
                </Link>
              </div>
              <div class="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
                <h3 class="mt-6  text-gray-800 font-bold dark:text-gray-200 ">
                  <img className="w-12 flex mx-auto" src={feedback} alt="" />
                  Feedback
                </h3>

                <p class="mt-2 text-gray-500 dark:text-gray-400 ">
                  Help us serve you better
                </p>

                <Link
                  to={"/feedback"}
                  class="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>Give thoughts.</span>

                  <BsArrowRight className="text-lg " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
