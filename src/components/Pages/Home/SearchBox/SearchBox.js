import React, { useState } from "react";
import { BsArrowRight, BsFillGeoAltFill, BsFillPersonFill, BsHourglassSplit } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import videoBg from "../../../Assets/video/pexels-max-fischer-5198161-3840x2160-50fps.mp4";

const SearchBox = () => {
  const [data, setData] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);

    fetch(`https://edumate-second-server.vercel.app/api/v1/tutor/location/${search}`)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          setData(result.data);
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <div className="main mt-12 relative flex flex-col items-center justify-center py-12 mb-12 overflow-hidden  ">
        <div className=" z-30 p-2  text-2xl bg-white dark:text-white text-green-600 dark:bg-green-500 mb-6  bg-opacity-25 rounded-xl">
          <h2 className="flex">
            <span className="mx-2">Search teacher by your location</span>
            <span className="mt-1"> <BsFillGeoAltFill /> </span> 
          </h2>
        </div>

        <div className="content flex gap-4 justify-center items-center relative z-30 p-5 text-2xl text-green-600 dark:text-white bg-white dark:bg-green-400 bg-opacity-50 rounded-xl">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              name="search"
              type="text"
              placeholder="for example: Dhaka"
              className="input w-full max-w-xs text-slate-700"
            />
            <button className="btn dark:bg-blue-500 dark:hover:bg-blue-600 text-white bg-green-600 hover:bg-green-800">Search Here</button>
          </form>
        </div>
        <video className="absolute z-10 w-auto min-w-full min-h-full max-w-none " src={videoBg} autoPlay loop muted />
      </div>

      <div className="mt-10">
        {data && (
          <div>
            <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10">
              {data?.map((value, idx) => (
                <div key={idx} className="max-w-2xl space-y-2 mx-auto">
                  <div className=" shadow-md border text-start border-gray-300 rounded-lg max-w-sm bg-indigo-200 dark:border-gray-300">
                    <img className="rounded-t-lg h-[201px] w-[300px]" src={value.image} alt="img" />

                    <div className="p-5">
                      <h5 className=" font-bold text-green-600 text-md flex tracking-tight">
                        <FaBookReader className="mt-1 text-gray-900 ml-1 mr-2" /> {value?.background}
                      </h5>

                      <p className="font-bold text-2xl flex  text-gray-800">
                        <BsFillPersonFill className="mt-1 mr-1" />

                        {value?.name}
                      </p>
                      {/* <p className="font-bold text-md flex  text-gray-800">
                          <HiLocationMarker className="mt-1 mr-2" /> {data?.location}
                        </p> */}
                      <p className="font-bold text-md  mb-3 flex text-gray-800">
                        <BsHourglassSplit className="mt-1 mr-2" /> {value?.experience} years experience
                      </p>
                      <div>
                        <Link to={`/instructor/${value?._id}`}>
                          <div className="flex mt-3">
                            <button className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-12 py-3 text-white focus:outline-none focus:ring active:bg-blue-500">
                              <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                                <BsArrowRight />
                              </span>

                              <span className="text-sm font-medium transition-all group-hover:mr-4">Details</span>
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
