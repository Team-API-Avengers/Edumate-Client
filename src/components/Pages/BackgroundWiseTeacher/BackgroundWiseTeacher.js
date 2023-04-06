import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {
  BsHourglassSplit,
  BsFillPersonFill,
  BsArrowRightShort,
} from "react-icons/bs";

const BackgroundWiseTeacher = () => {
  const Alldata = useLoaderData();
  console.log(Alldata);

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="grid grid-cols-4 gap-6">
        {Alldata?.data?.map((data) => {
          return (
            <div class="max-w-2xl space-y-2 mx-auto">
              <div class=" shadow-md border text-start border-gray-300 rounded-lg max-w-sm bg-indigo-200 dark:border-gray-300">
                <img class="rounded-t-lg" src={data.image} alt="" />

                <div class="p-5">
                  <h5 class="text-gray-900 font-bold text-md flex tracking-tight">
                    <FaBookReader className="mt-1 ml-1 mr-2" />{" "}
                    {data?.background}
                  </h5>

                  <p class="font-bold text-2xl flex  text-gray-800">
                    <BsFillPersonFill className="mt-1 mr-1" />

                    {data?.name}
                  </p>
                  <p class="font-bold text-md flex  text-gray-800">
                    <HiLocationMarker className="mt-1 mr-2" /> {data?.location}
                  </p>
                  <p class="font-bold text-md  mb-3 flex text-gray-800">
                    <BsHourglassSplit className="mt-1 mr-2" />{" "}
                    {data?.experience} years experience
                  </p>
                  <div>
                    <Link to={`/instructor/${data?._id}`}>
                      <button className="flex px-12 py-2 text-white  border rounded bg-blue-600">
                        Details <BsArrowRightShort className=" text-2xl" />
                      </button>
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
