import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import {
  BsArrowRight,
  BsArrowRightShort,
  BsFillPersonFill,
  BsHourglassSplit,
} from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";

const Instructors = () => {
  const [allInstructor, setInstructors] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`)
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 max-w-screen-xl mx-auto">
        {allInstructor?.data?.map((instructor) => {
          return (
            <div className="min-h-screen">
              <div className="px-25 mx-auto  py-10">
                <div className="flex  flex-col">
                  <div class="max-w-2xl space-y-2 mx-auto">
                    <div class=" shadow-md border text-start transition transform hover:scale-105 duration-300  border-gray-300 rounded-lg max-w-sm bg-slate-200 dark:border-gray-300">
                      <img
                        alt="teacher"
                        className="object-cover h-[201px] w-[300px] rounded-t-md mx-auto object-center block"
                        src={instructor?.image}
                      />

                      <div class="p-5">
                        <h5 class="text-green-600 font-bold text-md flex tracking-tight">
                          <FaBookReader className="mt-1 text-black ml-1 mr-2" />{" "}
                          {instructor?.background}
                        </h5>

                        <p class="font-bold text-2xl flex  text-gray-800">
                          <BsFillPersonFill className="mt-1 mr-1" />

                          {instructor?.name}
                        </p>
                        {/* <p class="font-bold text-md flex  text-gray-800">
                          <HiLocationMarker className="mt-1 text-xl mr-2" />{" "}
                          {instructor?.location.slice(10)}
                        </p> */}
                        <p class="font-bold text-md  mb-3 flex text-gray-800">
                          <BsHourglassSplit className="mt-1 text-xl mr-2" />{" "}
                          {instructor?.experience} years experience
                        </p>
                        <div>
                          <Link to={`/instructor/${instructor?._id}`}>
                            <div class="flex mt-3">
                              <button class="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-12 py-2 text-white focus:outline-none focus:ring active:bg-blue-500">
                                <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                                  <BsArrowRight />
                                </span>

                                <span class="text-sm font-medium transition-all group-hover:mr-4">
                                  Details
                                </span>
                              </button>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
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

export default Instructors;
