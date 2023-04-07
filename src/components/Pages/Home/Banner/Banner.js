// import React from "react";
import React, { Component } from "react";
import Typical from "react-typical";
import { BsSearch } from 'react-icons/bs';

const Banner = () => {

  return (
   <div>
     

    <section
  className="relative bg-[url(https://img.freepik.com/free-vector/muslim-family-traditional-clothes-reading-holy-book-quran-tiny-people-five-pillars-islam-islamic-calendar-islamic-culture-concept_335657-677.jpg?w=740&t=st=1680886535~exp=1680887135~hmac=6e3682b65a2cf237a5b6372ce0b7cae2a5a22a09581b1f89c10a9c804e836fbe)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let's' find your

        <strong className="block font-extrabold text-blue-700">
          Home Tutor.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
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





