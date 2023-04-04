import React from "react";
import { BsArrowRight, BsSearch } from "react-icons/bs";

const OurEnvironment = () => {
  return (
    <div className="mx-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
          <div className="md:col-span-2">
            <div className="flex">
              <h1 className="text-5xl font-bold text-start">
                Find Your <br /> Tutor
              </h1>
              <div className="divider  bg-black  w-1 divider-horizontal"></div>
            </div>

            <p className="py-6 text-start">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>

            <button className="btn btn-primary justify-start flex group">
              <span>Get Started</span>
              <BsArrowRight className="group-hover:flex hidden mx-3" />
            </button>

            <form className="flex border my-10  border-gray-400 bg-white w-80 rounded-lg">
              <input
                type="text"
                placeholder="Search your subject"
                className="input w-full max-w-xs focus:outline-0 text-blue-600"
              />

              <button className="">
                <BsSearch className="text-4xl mx-2 hover:text-blue-700" />
              </button>
            </form>
          </div>

          <div className="md:col-span-1 md:py-96 py-40">
            <div className=" relative   ">
              <div className="">
                <img
                  src="https://img1.wsimg.com/isteam/ip/e371c7f8-92b2-4636-8484-5c44ea3c30f7/blob-f732d4d.png"
                  className="max-w-sm md:w-32  ob rotate-45 md:h-32 w-16 h-16 absolute  top-[-120px] left-12  border-b-4 border-r-8 border-purple-600 rounded-lg shadow-2xl"
                  alt=""
                />

                <img
                  src="https://llt.imgix.net/v1/1657590644-varsity-tutors-for-schools-teacher-assigned-one-pager-edited.png?ixlib=rb-3.3.1&fit=&auto=format%2Ccompress&w=960&crop=focalpoint&fp-x=0.6&fp-y=0.97&h=540&ar=1.7777777777777777"
                  className="max-w-sm md:w-36 rotate-45 md:h-32 w-20 h-16 absolute md:left-36 left-20 md:top-0 -top-10 right-48 border-b-4 border-r-8 border-green-600   rounded-lg shadow-2xl"
                  alt=""
                />

                <img
                  src="http://hometutor.co.tz/wp-content/uploads/2020/02/HOME-TUTOR-LOGO-01.png"
                  className="max-w-sm md:w-28 border-b-4 border-r-8 border-orange-600 rotate-45 md:h-28 w-16 h-16 absolute bottom-32 left-28 rounded-lg shadow-2xl"
                  alt=""
                />

                <img
                  src="https://content.jdmagicbox.com/comp/lucknow/d2/0522px522.x522.171206135533.c5d2/catalogue/go-home-tutor-gomti-nagar-lucknow-tutorials-irvx9.jpg"
                  className="max-w-sm md:w-52 rotate-45 md:h-52 border-b-4 w-20 h-16 border-r-8 border-blue-700 absolute md:bottom-[-10px] bottom-[50px] md:-right-10 -right-4
                  rounded-lg shadow-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEnvironment;
