import React, { useEffect, useState } from "react";
import Loader from "../../../Shared/Loader/Loader";
import {
  BsArrowRight,
  BsFillPersonFill,
  BsHourglassSplit,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import SearchAnimation from "../../../Assets/Animation/SearchAnimation.json";
import Lottie from "lottie-react";

const SearchQuery = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`)
      .then((res) => res.json())
      .then((data) => setData(data?.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleFilter(event) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    // console.log(data);
    const filtered = data?.filter((item) => {
      return (
        item?.name?.toLowerCase().includes(query) ||
        item?.location?.toLowerCase().includes(query) ||
        item?.background?.toLowerCase().includes(query)
      );
    });
    setFilteredData(filtered);
  }

  console.log(filteredData);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-10 lg:mx-10 my-10">
        <div></div>
        <div className="lg:mx-0 mx-20">
          <Lottie
            className="w-52 mx-auto"
            animationData={SearchAnimation}
            loop={true}
          ></Lottie>
        </div>
        <div className="mt-10 col-span-2">
          <h1>Search your tutor by his - Name / Location / Background</h1>
          <input
            placeholder="Search Your Tutor"
            type="text"
            className="text-black my-5 h-10 p-3"
            onChange={handleFilter}
          />
          <button className="bg-green-600  h-10 p-2 -mt-[2px]">Search</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 max-w-screen-xl mx-auto  md:grid-cols-3 grid-cols-1 gap-5">
        {filteredData?.map((value, idx) => (
          <div
            key={idx}
            className="max-w-2xl group overflow-hidden space-y-2 mx-auto"
          >
            <div className=" shadow-md border text-start border-gray-300 rounded max-w-sm bg-indigo-200 dark:border-gray-300">
              <img
                className=" h-[201px] w-[300px] overflow-hidden object-cover  aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src={value.image}
                alt="img"
              />

              <div className="p-5">
                <h5 className=" font-bold text-green-600 text-md flex tracking-tight">
                  <FaBookReader className="mt-1 text-gray-900 ml-1 mr-2" />
                  {value?.background}
                </h5>

                <p className="font-bold text-2xl flex  text-gray-800">
                  <BsFillPersonFill className="mt-1 mr-1" />

                  {value?.name}
                </p>
                {/* <p className="font-bold text-md flex  text-gray-800">
                          <HiLocationMarker className="mt-1 mr-2" /> {data?.location}
                        </p> */}
                <p className="font-bold text-md  mb-3 flex text-gray-800">
                  <BsHourglassSplit className="mt-1 mr-2" /> {value?.experience}
                  years experience
                </p>
                <div>
                  <Link to={`/instructor/${value?._id}`}>
                    <div className="flex mt-3">
                      <button className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-2 text-white focus:outline-none focus:ring active:bg-blue-500">
                        <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                          <BsArrowRight />
                        </span>

                        <span className="text-sm font-medium transition-all group-hover:mr-4">
                          Details
                        </span>
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
  );
};

export default SearchQuery;
