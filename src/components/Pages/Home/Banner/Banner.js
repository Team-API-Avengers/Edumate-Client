// import React from "react";
import React, { Component } from "react";
import Typical from "react-typical";
import { BsSearch } from "react-icons/bs";

const Banner = () => {
  return (
    <div>
      <section className="relative  bg-[url(https://img.freepik.com/premium-photo/people-hands-holding-books-learning-studying-knowledge-education_63762-5950.jpg?w=1380)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/25 sm:bg-transparent bg-gradient-to-r from-white/25 to-white/50"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let's find your
              <strong class="block my-2 font-extrabold text-blue-700">
                home teacher
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
