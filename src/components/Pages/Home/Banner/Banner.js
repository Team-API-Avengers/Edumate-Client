// import React from "react";
import React, { Component } from "react";
import Typical from "react-typical";

const Banner = () => {

  return (
    <section className="mt-20">
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1086689054231371817/1091073150206365696/14230944_5437683.jpg"
              alt=""
              className="lg:max-w-sm md:max-w-full rounded-lg shadow-2xl border-l-8 border-blue-600 border-b-8 rounded-t-3xl"
            />

            <img
              src="https://www.shutterstock.com/image-vector/happy-literacy-day-young-people-260nw-2012561195.jpg"
              alt=""
              className="lg:max-w-sm md:max-w-full rounded-lg shadow-2xl -mt-32 ms-36 border-blue-600 border-b-8 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
            />
          </div>

         

         
          <div>
            <h1 className="text-4xl font-bold">
              The <span className="text-blue-600">easiest Way</span> to get your new
              <Typical steps={["Student", 2000, "Teacher", 1000]} loop={Infinity} wrapper="p" />
            </h1>
            <p className="py-6">
              Edumate is the best tuition media. Thousands of parents are offering part time tuition jobs forbedumate.
              Work tuition job and earn additional income! Call to get experienced teachers for all classes in Bengali
              and English versions. We are providing the best teachers & tuition in the whole of Dhaka city.
            </p>
            <div className="flex gap-4">
              <div className="mt-3">
                <p>Teacher</p>
              </div>
              <div className="mt-3">
                <p>Students</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full max-w-xs focus:outline-0 text-blue-600"
                />
              </div>
              <div>
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <div className="mt-10">
              <div className="flex gap-4">
                <p>Popular searches:</p>
                <p>English</p>
                <p>English</p>
                <p>English</p>
                <p>English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
