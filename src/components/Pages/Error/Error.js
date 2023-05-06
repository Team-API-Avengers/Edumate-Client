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
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
          <div className="w-full ">
            <div className="flex flex-col items-center max-w-lg mx-auto text-center">
              <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                404 error
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-[#bb86fc] md:text-3xl">
                We lost this page
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                We searched high and low, but couldn’t find what you’re looking
                for.Let’s find a better place for you to go.
              </p>
              <Link to={ "/" }>
                <button className=" px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 mt-3 shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                  Take me home
                </button>
              </Link>
            </div>

            <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
                <h3 className="mt-6  text-gray-800 font-bold dark:text-gray-200 ">
                  <img className="w-12 flex mx-auto" src={ contact } alt="" />
                  Contact Us
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                  Connect with us and thrive.
                </p>

                <Link
                  to={ "/contact" }
                  className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>Lets Connect</span>

                  <BsArrowRight className="text-lg " />
                </Link>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
                <h3 className="mt-6  text-gray-800 font-bold dark:text-gray-200 ">
                  <img className="w-12 flex mx-auto" src={ blog } alt="" />
                  Our blog
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                  Read the latest posts on our blog
                </p>

                <Link
                  to={ "/blog" }
                  className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>View latest posts</span>

                  <BsArrowRight className="text-lg " />
                </Link>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
                <h3 className="mt-6  text-gray-800 font-bold dark:text-gray-200 ">
                  <img className="w-12 flex mx-auto" src={ feedback } alt="" />
                  Feedback
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                  Help us serve you better
                </p>

                <Link
                  to={ "/feedback" }
                  className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
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
