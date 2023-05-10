import React, { useEffect, useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader";
import { BsHourglassSplit, BsFillPersonFill, BsArrowRightShort, BsArrowRight } from "react-icons/bs";

const BackgroundWiseTeacher = () => {
  const Alldata = useLoaderData();
  // console.log(Alldata);
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen mt-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
        {Alldata?.data?.map((data, idx) => {
          return (
            <div key={idx} className="max-w-2xl space-y-2 mx-auto">
              <div className=" shadow-md border text-start border-gray-300 rounded-lg max-w-sm bg-[#04516B] dark:border-gray-300">
                <img className="rounded-t-lg h-[201px] w-[300px]" src={data.image} alt="" />

                <div className="p-5">
                  <h5 className=" font-bold text-gray-200 text-md flex tracking-tight">
                    <FaBookReader className="mt-1 text-gray-200 ml-1 mr-2" /> {data?.background}
                  </h5>

                  <p className="font-bold text-2xl flex  text-gray-200">
                    <BsFillPersonFill className="mt-1 mr-1" />

                    {data?.name}
                  </p>
                  {/* <p className="font-bold text-md flex  text-gray-800">
                    <HiLocationMarker className="mt-1 mr-2" /> {data?.location}
                  </p> */}
                  <p className="font-bold text-md  mb-3 flex text-gray-200">
                    <BsHourglassSplit className="mt-1 mr-2" /> {data?.experience} years experience
                  </p>
                  <div>
                    <Link to={`/instructor/${data?._id}`}>
                      <div className="flex mt-3">
                        <button className="group relative inline-flex items-center overflow-hidden rounded bg-[#1AA3D0] px-12 py-3 text-white focus:outline-none focus:ring active:bg-blue-500 w-full">
                          <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                            <BsArrowRight />
                          </span>

                          <span className="text-sm  font-medium transition-all group-hover:mr-4">Details</span>
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundWiseTeacher;
