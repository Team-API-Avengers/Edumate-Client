import React, { useEffect, useState } from 'react';
import { BsFillQuestionDiamondFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const TutorTestQuestion = () => {
    
    const [data, setData] = useState([]);


    const [filteredData, setFilteredData] = useState([]);







    //! Change Style 
    const [nextButtonStyle, setNextButtonStyle] = useState("hidden");
   
    const [formStyle, setFormStyle] = useState("block");
  

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











    //! handle correct answer
//   const handleOption = (option, data) => {
//     console.log(data);
//     const selectedAnswer = option;
//     if (selectedAnswer === data.answer) {
//       toast.success('Success');
//     } else {
//       toast.error('Wrong');
//     }

//     
//   };










//! handle Question
      const handleQuestion = e => {
        e.preventDefault();
        const form = e.target;
        const selectedOne = form.selectedOne.value;
        const selectedTwo = form.selectedTwo.value;
        const selectedThree = form.selectedThree.value;
        const selectedFour = form.selectedFour.value;
        const selectedFive = form.selectedFive.value;



    


        console.log(selectedOne, selectedTwo, selectedThree, selectedFour, selectedFive);

        console.log(filteredData[0]?.answer, filteredData[1]?.answer, filteredData[2]?.answer, filteredData[3]?.answer, filteredData[4]?.answer);





        //! Check Options for correct answer
        if( selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer && selectedFive === filteredData[4]?.answer )
        {
            toast.success('Awesome!')
            setNextButtonStyle("block");
            setFormStyle("hidden");
        }else{
            toast.error('Wrong!')
        }





      }

    //   console.log(userSelectedData);




    return (
        <div className='m-10'>
            <div className="relative">
                
                
                <div>
                        <label className="block text-black">
                            Select Your Department That You Want To Teach
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


                      <div className={formStyle}>
                        {filteredData[1] &&
                      <div>
                        <div className="w-full shadow-gray-400 shadow-lg rounded-md p-3 my-5 border-2 border-orange-500 ">

                        <form onSubmit={handleQuestion}>


                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[0]?.question}</label>
                            <div className="text-start">
                            <select required  name='selectedOne' className="select select-primary w-full max-w-xs">

                            {
                                filteredData[0]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>





                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[1]?.question}</label>
                            <div className="text-start">
                            <select required  name='selectedTwo' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[1]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>




                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[2]?.question}</label>
                            <div className="text-start">
                            <select required  name='selectedThree' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[2]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>




                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[3]?.question}</label>
                            <div className="text-start">
                            <select required  name='selectedFour' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[3]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>





                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[4]?.question}</label>
                            <div className="text-start">
                            <select required name='selectedFive' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[4]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>



                                <button className='btn btn-primary w-full'>Submit</button>

                        </form>

                        </div>
                      </div>
                        }

                      </div>

                        {filteredData[1] &&
                        <Link to={'/dashboard/add-Teacher'} className={nextButtonStyle}>
                          <button className='btn btn-success my-10 w-1/3'>Next</button>
                      </Link>
                        }








            </div>
            </div>
    );
};

export default TutorTestQuestion;