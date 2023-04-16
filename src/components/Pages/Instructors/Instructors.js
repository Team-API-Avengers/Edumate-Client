import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight, BsArrowRightShort, BsFillPersonFill, BsHourglassSplit } from "react-icons/bs";
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
    <div className="m-5">
      <div className="grid sm:grid-cols-1 lg:grid-cols-4  md:grid-cols-2 md:gap-6  gap-4 max-w-screen-xl mx-auto">
        {allInstructor?.data?.map((instructor) => {
          return (
            <div className="">
              <div className="px-25 mx-auto ">
                <div className="flex  flex-col">
                  <div class="max-w-2xl  mx-auto">
                    <div class=" shadow-md border text-start dark:bg-gray-300  border-gray-300 rounded max-w-sm dark:border-gray-300">
                      <img
                        alt="teacher"
                        className="object-cover h-[201px] w-[300px] mx-auto object-center block"
                        src={instructor?.image}
                      />

                      <div class="p-5">
                        <h5 class="text-green-600  dark:text-black font-bold text-md flex tracking-tight">
                          <FaBookReader className="mt-1   text-black ml-1 mr-2" /> {instructor?.background}
                        </h5>

                        <p class="font-bold text-xl flex    text-gray-800">
                          <BsFillPersonFill className="mt-1 mr-1" />

                          {instructor?.name}
                        </p>

                        <p class="font-bold text-md  mb-3 flex   text-gray-800">
                          <BsHourglassSplit className="mt-1 text-xl mr-2" /> {instructor?.experience} years experience
                        </p>
                        <div>
                          <Link to={`/instructor/${instructor?._id}`}>
                            <button class="learn-more ">
                              <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                              </span>
                              <span class="button-text dark:text-white">Learn More</span>
                            </button>
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
