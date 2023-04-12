// import React from "react";
import React from "react";
// import Typical from "react-typical";
// import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section className="relative  bg-[url(https://img.freepik.com/premium-photo/people-hands-holding-books-learning-studying-knowledge-education_63762-5950.jpg?w=1380)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-gradient-to-r bg-white/25 from-white/25 to-white/75   sm:bg-transparent dark:bg-[#350573]/25 dark:from-[#1F0047]/25 dark:to-[#0F95B6]/50"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl mx-10 text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl dark:text-white">
              Let's find your
              <strong class="block my-2 font-extrabold text-blue-700 dark:text-[#dee5ff]">
                home teacher
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed  dark:text-black">
            Online tutors, trusted, vetted and instantly bookable to support maths, english, science and a host of other academic, vocational and pastoral tuition.
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#search"
                class="block w-full rounded bg-blue-600 dark:bg-[#350573] px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                Get Started
              </a>

              <Link to="/about-us"
                class="block w-full rounded bg-white dark:text-[#350573] px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500">
      <h1>Hello Dear</h1>
    </div>
    </div>
  );
};

export default Banner;
