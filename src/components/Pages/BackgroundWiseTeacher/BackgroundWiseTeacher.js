import React from "react";
import { useLoaderData } from "react-router-dom";

const BackgroundWiseTeacher = () => {
  const Alldata = useLoaderData();
  // console.log(Alldata);

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="grid grid-cols-4 gap-4">
        {Alldata?.data?.map((data) => {
          return (
            <div class="max-w-2xl mx-auto">
              <div class=" shadow-md border text-start border-gray-200 rounded-lg max-w-sm bg-indigo-200 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={data.image} alt="" />
                </a>
                <div class="p-5">
                  <h5 class="text-gray-900 font-bold text-md tracking-tight">
                    {data?.background}
                  </h5>

                  <p class="font-bold text-2xl  mb-3 text-gray-800">
                    {data?.name}
                  </p>
                  <div>
                    <label
                      htmlFor="bookTutor"
                      className=" hover:bg-white hover:text-black bg-green-600 text-white  px-12 py-2 rounded"
                    >
                      Book
                    </label>
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
