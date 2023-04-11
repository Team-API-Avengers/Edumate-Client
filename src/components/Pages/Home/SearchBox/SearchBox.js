import React, { useState } from 'react';
import { BsArrowRight, BsFillPersonFill, BsHourglassSplit } from 'react-icons/bs';
import { FaBookReader } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchBox = () => {


    const [data, setData] = useState()





    const handleSearch = e => {
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
            <form onSubmit={handleSearch} className='py-10 bg-green-100 dark:bg-black  dark:text-white'>
                <h5 className='my-5'>Search teachers by your location</h5>
                <input placeholder='for example :  Dhaka' name='search' type="text" className='input input-bordered w-96 rounded-none' />
                <button className='btn bg-blue-500 hover:bg-blue-600 border-0 rounded-none'>Search</button>
            </form>

            

            <div className="mt-10">
            {data && 
        
            <div>
            <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10">
            {
                data?.map(value => 
                    <div class="max-w-2xl space-y-2 mx-auto">
                    <div class=" shadow-md border text-start border-gray-300 rounded-lg max-w-sm bg-indigo-200 dark:border-gray-300">
                        <img
                        class="rounded-t-lg h-[201px] w-[300px]"
                        src={value.image}
                        alt="img"
                        />
      
                         <div class="p-5">
                        <h5 class=" font-bold text-green-600 text-md flex tracking-tight">
                          <FaBookReader className="mt-1 text-gray-900 ml-1 mr-2" />{" "}
                          {value?.background}
                        </h5>
      
                        <p class="font-bold text-2xl flex  text-gray-800">
                          <BsFillPersonFill className="mt-1 mr-1" />
      
                          {value?.name}
                        </p>
                        {/* <p class="font-bold text-md flex  text-gray-800">
                          <HiLocationMarker className="mt-1 mr-2" /> {data?.location}
                        </p> */}
                        <p class="font-bold text-md  mb-3 flex text-gray-800">
                          <BsHourglassSplit className="mt-1 mr-2" />{" "}
                          {value?.experience} years experience
                        </p>
                        <div>
                          <Link to={`/instructor/${value?._id}`}>
                            <div class="flex mt-3">
                              <button class="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-12 py-3 text-white focus:outline-none focus:ring active:bg-blue-500">
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
                    ) }
            </div>
           
        </div>
      }
            </div>
        </div>
    );
};

export default SearchBox;