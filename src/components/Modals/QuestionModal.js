import React, { useEffect, useState } from 'react';
// import { BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

const QuestionModal = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    //! Change Style 
    // const [style, setStyle] = useState("block");
  

    // console.log(object);


    useEffect(() => {
      fetch(`https://edumate-second-server.vercel.app/api/v1/test`)
        .then((res) => res.json())
        .then((data) => setData(data?.data))
        .finally(() => {});
    }, []);
  

    function handleFilter(event) {
        const query = event.target.value.toLowerCase();
        console.log(query);
        // console.log(data);
        const filtered = data?.filter((item) => {
          return (
            item?.category?.toLowerCase().includes(query)
          );
        });
        // setFilteredData(filtered?.slice(0,4));

         //! For Display 5 question from array by randomly .. .. ..
  const n = 3; // number of elements we want to get
  const shuffledArray = filtered.sort(() => 0.5 - Math.random()); // shuffles array
  const resultData = shuffledArray.slice(0, n + 2); // gets first n elements after shuffle
             setFilteredData(resultData)
      }
    
      console.log(filteredData);











      //! handle Option
          
  const handleOption = (option, data) => {
    console.log(data);
    const selectedAnswer = option;
    if (selectedAnswer === data.answer) {
      toast.success('Success');
    } else {
      toast.error('Wrong');
    }

    // setStyle("hidden");
  };



    return (
        <div>
            <input type="checkbox" id="QuestionModal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="QuestionModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                
                <div>
                        <label className="block text-black">
                            Select Your Department <br /> That You Want To Teach
                            </label>

                            {/* Selector */}
                         <select
                          name='background'
                          className="select  h-11 text-gray-800 border border-green-400 mt-1 rounded w-full bg-sky-50"
                          onChange={handleFilter}
                        >
                          <option disabled selected>
                            Choose your background
                          </option>
                          <option>Science</option>
                          <option>Commerce</option>
                          <option>Arts</option>
                        </select> 
                      </div>




                      {/* Questions */}
                      {/* <div>
                        {filteredData[1] &&
                        <button className="btn gap-2 mt-5">
                        Department
                        <div className="badge badge-secondary">
                          {filteredData[1]?.category}
                          </div>
                      </button>
                        }
                        {filteredData?.map((data, idx) => 
                        <div key={idx} className='my-5'>
                            <div className="flex">
                            <span className='bg-yellow-200 text-start'>
                              🧿
                              </span>
                            <span className='bg-yellow-200 text-start dark:text-black'>
                              {data?.question}
                              </span>
                            </div>

                            <div className='grid grid-cols-2 gap-5 mt-5'>
                                {data?.options?.map((options, idx) =>
                                <div key={idx} className="flex dark:text-black">
                                <input type="radio" name="radio-1" className="radio mx-2" />
                                <p>{options}</p>
                                </div>
                                )}
                            </div>
                            
                        </div>
                        )}
                        
                        
                        {filteredData[1] &&
                        <label htmlFor="QuestionModal">
                        <Link to={'/dashboard/add-Teacher'} className="btn gap-2 mt-5">
                          Next
                      </Link>
                        </label>
                        }
                      </div> */}


                      <div>
                        {filteredData[1] &&
                      <div className="w-full shadow-gray-400 shadow-lg rounded-md p-3 my-5 border-2 border-orange-500 ">
    
                      

                      <div>
                      {filteredData?.map((data, idx) => 
                        <div key={idx}>
                            <div>
                              <div className="flex">
                            {/* <span className='bg-yellow-200 text-start'>
                              🧿
                              </span> */}
                            <span className='bg-yellow-200 font-bold text-xl text-start dark:text-black'>
                              {data?.question}
                              </span>
                            </div>

                            <div>
                                {data?.options?.map((options, idx) =>
                                <div key={idx} onClick={()=>handleOption(options,data)} className="flex dark:text-black my-2">
                                <input type="radio" name="radio-1" className="radio mx-2" />
                                <p>{options}</p>
                                </div>
                                )}
                            </div>
                            </div>
                            
                        </div>
                        )}
                      </div>
                    </div>
                        }

                        {filteredData[1] &&
                        <label htmlFor="QuestionModal">
                        <Link to={'/dashboard/add-Teacher'} className="btn gap-2 mt-5">
                          Next
                      </Link>
                        </label>
                        }
                      </div>








            </div>
            </div>
        </div>
    );
};

export default QuestionModal;