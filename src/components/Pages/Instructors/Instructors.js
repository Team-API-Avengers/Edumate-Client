import React, { useEffect, useState } from "react";
import { BsFillPersonFill, BsHourglassSplit } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { AiOutlineDelete } from "react-icons/ai";

const Instructors = () => {
  const { logUser } = useContext(AuthContext);
  const [allInstructor, setInstructors] = useState({});

  const [filteredData, setFilteredData] = useState({});

  // console.log(allInstructor.data);

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

  //! Sorting START ----
  // Extract the "location" property from each object and create a new array
  const namesArray = allInstructor?.data?.map((data) => data.location);

  // To map an array in JSX while displaying one value just one time
  const uniqueItems = [...new Set(namesArray)];

  //! Sort by their location and department
  function handleFilter(event) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    // console.log(data);
    const filtered = allInstructor?.data?.filter((item) => {
      return (
        item?.location?.toLowerCase().includes(query) ||
        item?.background?.toLowerCase().includes(query)
      );
    });
    setFilteredData(filtered);
    console.log(filtered);
  }

  //! Loader
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="m-5">
      {/*FIXME: Data Sort */}
      <div className="flex justify-between mx-10">
        {/*todo: Data Sorting by location */}
        <div className="flex justify-end my-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text"></span>
              <span className="label-text-alt dark:text-gray-200 font-bold">
                Sort by location
              </span>
            </label>

            <select
              onChange={handleFilter}
              name="category"
              className="select select-bordered w-full max-w-xs dark:text-gray-700"
            >
              <option disabled selected>
                Choose one
              </option>
              {uniqueItems?.map((data, idx) => (
                <option key={idx}>{data}</option>
              ))}
            </select>
          </div>
        </div>

        {/*todo: Data Sorting by department */}
        <div className="flex justify-end my-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text"></span>
              <span className="label-text-alt dark:text-gray-200 font-bold">
                Sort by department
              </span>
            </label>

            <select
              onChange={handleFilter}
              name="category"
              className="select select-bordered w-full max-w-xs dark:text-gray-700"
            >
              <option disabled selected>
                Choose one
              </option>
              <option>Science</option>
              <option>Commerce</option>
              <option>Arts</option>
            </select>
          </div>
        </div>
      </div>

      {/*todo: Data Load */}
      <div>
        {filteredData[1] ? (
          <div className="grid sm:grid-cols-1 lg:grid-cols-4  md:grid-cols-2 md:gap-6  gap-4 max-w-screen-xl mx-auto">
            {filteredData?.map((instructor, idx) => {
              return (
                <div key={idx} className="">
                  <div className="px-25 mx-auto ">
                    <div className="flex  flex-col">
                      <div className="max-w-2xl  mx-auto">
                        <div className=" shadow-md border text-start dark:bg-gray-300  border-gray-300 rounded max-w-sm dark:border-gray-300">
                          <img
                            alt="teacher"
                            className="object-cover h-[201px] w-[300px] mx-auto object-center block"
                            src={instructor?.image}
                          />

                          <div className="p-5">
                            <h5 className="text-[#1AA3D0] dark:text-[#00A99D] font-bold text-md flex tracking-tight">
                              <FaBookReader className="mt-1   text-black ml-1 mr-2" />{" "}
                              {instructor?.background}
                            </h5>

                            <p className="font-bold text-xl flex    text-gray-800">
                              <BsFillPersonFill className="mt-1 mr-1" />

                              {instructor?.name}
                            </p>

                            <p className="font-bold text-md  mb-3 flex   text-gray-800">
                              <BsHourglassSplit className="mt-1 text-xl mr-2" />{" "}
                              {instructor?.experience} years experience
                            </p>
                            <div className="">
                              <Link to={`/instructor/${instructor?._id}`}>
                                <button className="learn-more ">
                                  <span
                                    className="circle bg-[#1AA3D0] dark:bg-[#00A99D]"
                                    aria-hidden="true"
                                  >
                                    <span className="icon arrow"></span>
                                  </span>
                                  <span className="button-text text-[#1AA3D0] dark:text-[#00A99D]">
                                    Learn More
                                  </span>
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
        ) : (
          <div className="grid sm:grid-cols-1 lg:grid-cols-4  md:grid-cols-2 md:gap-6  gap-4 max-w-screen-xl mx-auto">
            {allInstructor?.data?.map((instructor, idx) => {
              return (
                <div key={idx} className="">
                  <div className="px-25 mx-auto ">
                    <div className="flex  flex-col">
                      <div className="max-w-2xl  mx-auto">
                        <div className=" shadow-md border text-start dark:bg-gray-300  border-gray-300 rounded max-w-sm dark:border-gray-300">
                          <img
                            alt="teacher"
                            className="object-cover h-[201px] w-[300px] mx-auto object-center block"
                            src={instructor?.image}
                          />

                          <div className="p-5">
                            <h5 className="text-[#1AA3D0] dark:text-[#00A99D]  font-bold text-md flex tracking-tight">
                              <FaBookReader className="mt-1   text-black ml-1 mr-2" />{" "}
                              {instructor?.background}
                            </h5>

                            <p className="font-bold text-xl flex    text-gray-800">
                              <BsFillPersonFill className="mt-1 mr-1" />

                              {instructor?.name}
                            </p>

                            <p className="font-bold text-md  mb-3 flex   text-gray-800">
                              <BsHourglassSplit className="mt-1 text-xl mr-2" />{" "}
                              {instructor?.experience} years experience
                            </p>
                            <div>
                              <Link to={`/instructor/${instructor?._id}`}>
                                <button className="learn-more ">
                                  <span
                                    className="circle bg-[#1AA3D0] dark:bg-[#00A99D]"
                                    aria-hidden="true"
                                  >
                                    <span className="icon arrow"></span>
                                  </span>
                                  <span className="button-text text-[#1AA3D0] dark:text-[#00A99D]">
                                    Learn More
                                  </span>
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
        )}
      </div>
    </div>
  );
};

export default Instructors;
