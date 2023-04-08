import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import {
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
            <div>
              <div className="px-25 mx-auto  py-10">
                <div className="flex  flex-col">
                  <div class="max-w-2xl space-y-2 mx-auto">
                    <div class=" shadow-md border text-start  border-gray-300 rounded-lg max-w-sm bg-indigo-200 dark:border-gray-300">
                      <img
                        alt="teacher"
                        className="object-cover h-[200px] w-[750px] mx-auto object-center block"
                        src={instructor?.image}
                      />

                      <div class="p-5">
                        <h5 class="text-gray-900 font-bold text-md flex tracking-tight">
                          <FaBookReader className="mt-1 ml-1 mr-2" />{" "}
                          {instructor?.background}
                        </h5>

                        <p class="font-bold text-2xl flex  text-gray-800">
                          <BsFillPersonFill className="mt-1 mr-1" />

                          {instructor?.name}
                        </p>
                        <p class="font-bold text-md flex  text-gray-800">
                          <HiLocationMarker className="mt-1 text-xl mr-2" />{" "}
                          {instructor?.location.slice(10)}
                        </p>
                        <p class="font-bold text-md  mb-3 flex text-gray-800">
                          <BsHourglassSplit className="mt-1 text-xl mr-2" />{" "}
                          {instructor?.experience} years experience
                        </p>
                        <div>
                          <Link to={`/instructor/${instructor?._id}`}>
                            <button className="flex px-12 py-2 text-white  border rounded bg-blue-600">
                              Details{" "}
                              <BsArrowRightShort className=" text-2xl" />
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
