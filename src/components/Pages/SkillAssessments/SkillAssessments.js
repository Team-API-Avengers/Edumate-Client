import React, { useContext, useEffect, useState } from 'react';
import { BsFillQuestionDiamondFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const SkillAssessments = () => {

    const {user} = useContext(AuthContext)

    const navigate = useNavigate()
    

    const [questions, setQuestions] = useState([])
    const [data, setData] = useState([]);
  

    useEffect(() => {
        fetch(`https://edumate-second-server.vercel.app/api/v1/test`)
          .then((res) => res.json())
          .then((data) => setData(data?.data))
          .finally(() => {});
      }, []);
  
        
   
  
    // ! filtering data by category which is sorting
  function handleFilter(event) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    // console.log(data);
    const filtered = data?.filter((item) => {
      return item?.category?.toLowerCase().includes(query);
    });
    // setFilteredData(filtered?.slice(0,4));
  
    //! For Display 5 question from array by randomly .. .. ..
    const n = 3; // number of elements we want to get
    const shuffledArray = filtered.sort(() => 0.5 - Math.random()); // shuffles array
    const resultData = shuffledArray.slice(0, n + 2); // gets first n elements after shuffle
    setQuestions(resultData);
  }
  
  console.log(questions);
  
  
  
  
  
  
  
  
  // ! Check and count the number of correct answers for each question in the array 
  
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  // Set scores
  const [score, setScore] = useState();
  
  function handleAnswerSelect(questionIndex, selectedOption) {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].disabled = true;
    setQuestions(updatedQuestions);
  }
  
  function calculateScore() {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  }
  
  
  if(score === 3 || score > 3){
    toast.success(`Your score is ${score}`)
  }
  if(score === 0){
    toast.error(`Your score is ${score}`)
  }
    
  
  
  

    return (
        <div className="mx-5 lg:mx-10">
        {/* TODO: Selector */}
        <div className="my">
        <div>
           <label className="block text-black dark:text-gray-300 text-xl font-semibold" id="title">
             Hi <span>{user?.displayName}</span>
             
           </label>
    
           {/* Selector */}
           <select
             name="background"
             // className="select  h-11 text-gray-800 border border-green-400 mt-1 rounded w-full bg-sky-50"
             className="select  h-11 text-gray-800  mt-1 rounded w-full bg-sky-50 border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D]"
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
        </div>
    
    
    
    
        {/* TODO: Display the questions */}
    {
      questions[1] &&
       <div>
        {questions.map((question, index) => (
         <div className="my-3" key={question.id}>
           <p className="text-start bg-yellow-300">{question.question}</p>
           {question.options.map((option, optionIndex) => (
             <div className="text-start" key={optionIndex}>
               <input
                 type="radio"
                 name={`question-${index}`}
                 value={option}
                 checked={userAnswers[index] === option}
                 disabled={question.disabled && userAnswers[index] !== option}
                 onChange={() => handleAnswerSelect(index, option)}
               />
               <label>{option}</label>
             </div>
           ))}
         </div>
       ))}
    
    
    
       <button className="btn btn-primary my-10" onClick={calculateScore}>Submit</button>
       </div>
    }
    
    
    
    
       {/* {score &&
       <p>Your score: {score}</p>
       } */}
     </div>
    );
};

export default SkillAssessments;