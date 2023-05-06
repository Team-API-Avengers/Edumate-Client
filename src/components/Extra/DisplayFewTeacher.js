import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader/Loader';
import { BsFillPersonFill, BsHourglassSplit } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaBookReader } from 'react-icons/fa';

const DisplayFewTeacher = () => {
    
  
  const [allInstructor, setInstructors] = useState({});
  console.log(allInstructor);


  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`)
      .then((res) => res.json())
      .then((data) => setInstructors(data?.data.reverse().slice(0,3)))
      .finally(() => {
        setLoading(false);

      });

  }, []);



  if (loading) {
    return <Loader />;
  }


    return (
        <div className="m-5">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3  md:grid-cols-2 md:gap-6  gap-4 max-w-screen-xl mx-auto">
          { allInstructor?.map((instructor, idx) => {
            return (
              <div key={ idx } className="">
                <div className="px-25 mx-auto ">
                  <div className="flex  flex-col">
                    <div className="max-w-2xl  mx-auto">
                      <div className=" shadow-md border text-start dark:bg-gray-300  border-gray-300 rounded max-w-sm dark:border-gray-300">
                        <img
                          alt="teacher"
                          className="object-cover h-[201px] w-[300px] mx-auto object-center block"
                          src={ instructor?.image }
                        />
  
                        <div className="p-5">
                          <h5 className="text-green-600  dark:text-black font-bold text-md flex tracking-tight">
                            <FaBookReader className="mt-1   text-black ml-1 mr-2" />{ " " }
                            { instructor?.background }
                          </h5>
  
                          <p className="font-bold text-xl flex    text-gray-800">
                            <BsFillPersonFill className="mt-1 mr-1" />
  
                            { instructor?.name }
                          </p>
  
                          <p className="font-bold text-md  mb-3 flex   text-gray-800">
                            <BsHourglassSplit className="mt-1 text-xl mr-2" />{ " " }
                            { instructor?.experience } years experience
                          </p>
                          <div>
                            <Link to={ `/instructor/${ instructor?._id }` }>
                              <button className="learn-more ">
                                <span className="circle" aria-hidden="true">
                                  <span className="icon arrow"></span>
                                </span>
                                <span className="button-text dark:text-[#bb86fc]">
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
          }) }
        </div>
      </div>
    );
};

export default DisplayFewTeacher;