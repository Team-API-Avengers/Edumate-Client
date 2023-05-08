import React, { useEffect, useState } from 'react';
import { BsFillQuestionDiamondFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SkillAssessments = () => {


    const navigate = useNavigate()
    
    const [data, setData] = useState([]);


    const [filteredData, setFilteredData] = useState([]);

   const [correctValues, setCorrectValues] = useState(0);

  console.log(correctValues);




  

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
        const n = 10; // number of elements we want to get
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
        const selectedSix = form.selectedSix.value;
        const selectedSeven = form.selectedSeven.value;
        const selectedEight = form.selectedEight.value;
        const selectedNine = form.selectedNine.value;
        const selectedTen = form.selectedTen.value;
        const selectedEleven = form.selectedEleven.value;
        const selectedTwelve = form.selectedTwelve.value;



    


        console.log(selectedOne, selectedTwo, selectedThree, selectedFour, selectedFive, );

        console.log(filteredData[0]?.answer, filteredData[1]?.answer, filteredData[2]?.answer, filteredData[3]?.answer, filteredData[4]?.answer, filteredData[5]?.answer, filteredData[6]?.answer, filteredData[7]?.answer, filteredData[8]?.answer, filteredData[9]?.answer, filteredData[10]?.answer, filteredData[11]?.answer, );





        //! Check Options for correct answer
        // if( selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer && selectedFive === filteredData[4]?.answer, selectedSix === filteredData[5]?.answer, selectedSeven === filteredData[6]?.answer, selectedEight === filteredData[7]?.answer, selectedNine === filteredData[8]?.answer, selectedTen === filteredData[9]?.answer, selectedEleven === filteredData[10]?.answer, selectedTwelve === filteredData[11]?.answer)
        // {
        //     toast.success('Awesome!')
            // setNextButtonStyle("block");
            // setFormStyle("hidden");
        // }else{
        //     toast.error('Wrong!')
        // }

        //!todo: Check Options for correct answer
        if(selectedOne === filteredData[0]?.answer){
            //! Two
            if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer){
                // ! Three
                if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer){
                    // ! Four
                    if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer){
                        // ! Five 
                        if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer && selectedFive === filteredData[4]?.answer){
                            //! Six 
                            if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer && selectedFive === filteredData[4]?.answer && selectedSix === filteredData[5]?.answer){
                                //! Seven
                                if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer && selectedFive === filteredData[4]?.answer && selectedSix === filteredData[5]?.answer && selectedSeven === filteredData[6]?.answer){
                                    //! Eight
                                    if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer && selectedFive === filteredData[4]?.answer && selectedSix === filteredData[5]?.answer && selectedSeven === filteredData[6]?.answer && selectedEight === filteredData[7]?.answer){
                                        //! Nine
                                        if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer && selectedFive === filteredData[4]?.answer && selectedSix === filteredData[5]?.answer && selectedSeven === filteredData[6]?.answer && selectedEight === filteredData[7]?.answer && selectedNine === filteredData[8]?.answer){
                                            // ! Ten
                                            if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer && selectedFive === filteredData[4]?.answer && selectedSix === filteredData[5]?.answer && selectedSeven === filteredData[6]?.answer && selectedEight === filteredData[7]?.answer && selectedNine === filteredData[8]?.answer && selectedTen === filteredData[9]?.answer){
                                                // ! Eleven
                                                if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer && selectedFive === filteredData[4]?.answer && selectedSix === filteredData[5]?.answer && selectedSeven === filteredData[6]?.answer && selectedEight === filteredData[7]?.answer && selectedNine === filteredData[8]?.answer && selectedTen === filteredData[9]?.answer && selectedEleven === filteredData[10]?.answer){
                                                    // ! Twelve
                                                    if(selectedOne === filteredData[0]?.answer && selectedTwo === filteredData[1]?.answer && selectedThree === filteredData[2]?.answer && selectedFour === filteredData[3]?.answer && selectedFive === filteredData[4]?.answer && selectedSix === filteredData[5]?.answer && selectedSeven === filteredData[6]?.answer && selectedEight === filteredData[7]?.answer && selectedNine === filteredData[8]?.answer && selectedTen === filteredData[9]?.answer && selectedEleven === filteredData[10]?.answer && selectedTwelve === filteredData[11]?.answer){
                                                        navigate('/dashboard')
                                                       toast.success('Wow! Congratulations!')
                                                       setCorrectValues(12)
                                                    }
                                                    else{
                                                        navigate('/dashboard')
                                                        toast.success('Your eleven answers is correct')
                                                setCorrectValues(11)
                                                    }
                                                }
                                                else{
                                                     navigate('/dashboard')
                                                    toast.success('Your ten answers is correct')
                                            setCorrectValues(10)
                                                }
                                            }
                                            else{
                                                 navigate('/dashboard')
                                                toast.success('Your nine answers is correct')
                                        setCorrectValues(9)
                                            }
                                        }
                                        else{
                                             navigate('/dashboard')
                                            toast.success('Your eight answers is correct')
                                    setCorrectValues(8)
                                        }
                                    }
                                    else{
                                         navigate('/dashboard')
                                        toast.success('Your seven answers is correct')
                                setCorrectValues(7)
                                    }

                                }
                                else{
                                     navigate('/dashboard')
                                    toast.success('Your six answers is correct')
                                setCorrectValues(6)
                                }
                            }
                            else{
                                 navigate('/dashboard')
                                 toast.success('Your five answers is correct')
                                setCorrectValues(5)
                            }
                        }
                        else{
                             navigate('/dashboard')
                            toast.success('Your Four answers is correct')
                            setCorrectValues(4)
                        }
                    }
                    else{
                         navigate('/dashboard')
                        toast.success('Your three answers is correct')
                        setCorrectValues(3)
                    }
                }
                else{
                     navigate('/dashboard')
                    toast.success('Your two answers is correct!')
                    setCorrectValues(2)
                }
            }
            else{
                 navigate('/dashboard')
                toast.success('Your one answer is correct!')
                setCorrectValues(1)
            }

        }
        else{
             navigate('/dashboard')
             toast.error('Your all answer is wrong!')
        }





      }

    //   console.log(userSelectedData);




    return (
        <div className='m-10'>
            <div className="relative">
                
                
                <div>
                        <label className="block text-black my-5 lg:my-10">
                            <span className='text-[#1AA3D0]'>Welcome</span> to the <br /> <strong>Skill Test Assessments</strong>
                            </label>

                            {/*todo: Department Selector's */}
                         <select
                          name='background'
                          className="select h-11 text-gray-800 border border-green-400 mt-1 rounded w-full bg-sky-50"
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




                      {/*todo: All Question's And Answer */}


                      <div>
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







                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[5]?.question}</label>
                            <div className="text-start">
                            <select required name='selectedSix' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[5]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>





                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[6]?.question}</label>
                            <div className="text-start">
                            <select required name='selectedSeven' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[6]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>







                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[7]?.question}</label>
                            <div className="text-start">
                            <select required name='selectedEight' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[7]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>









                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[8]?.question}</label>
                            <div className="text-start">
                            <select required name='selectedNine' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[8]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>











                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[9]?.question}</label>
                            <div className="text-start">
                            <select required name='selectedTen' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[9]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>













                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[10]?.question}</label>
                            <div className="text-start">
                            <select required name='selectedEleven' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[10]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
                            }
                            </select>
                            </div>
                            </div>















                            <div className="my-5">
                            <label className="flex justify-start m-2" disabled selected>
                                <BsFillQuestionDiamondFill className='mt-1 mr-2' />
                                {filteredData[11]?.question}</label>
                            <div className="text-start">
                            <select required name='selectedTwelve' className="select select-primary w-full max-w-xs">
                            {
                                filteredData[11]?.options?.map((options, idx) =><option key={idx}>{options}</option>)
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









            </div>
            </div>
    );
};

export default SkillAssessments;