// import React from "react";
import React, { Component } from "react";
import Typical from "react-typical";
import { BsSearch } from 'react-icons/bs';

const Banner = () => {

  return (
    <section className="mt-10">
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
             
              <form className="flex border border-gray-400 rounded-lg">
                <input
                  type="text"
                  placeholder="Search your subject"
                  className="input w-full max-w-xs bg-slate-100 focus:outline-0 text-blue-600"
                />
              
                <button className=""><BsSearch className="text-2xl mx-2 hover:text-blue-700" /></button>
              </form>



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
