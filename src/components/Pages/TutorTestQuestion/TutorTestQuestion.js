import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import { BsFillQuestionDiamondFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TutorTestQuestion = () => {
  const navigate = useNavigate();

  //! Change Style
  // const [nextButtonStyle, setNextButtonStyle] = useState("hidden");
  // const [formStyle, setFormStyle] = useState("block");

  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState([]);

  //   const [questions, setQuestions] = useState( [
  //     {
  //       id: 1,
  //       question: "What is the capital of France?",
  //       options: ["Paris", "London", "Berlin", "Madrid"],
  //       answer: "Paris",
  //       disabled: false
  //     },
  //     {
  //       id: 2,
  //       question: "What is the highest mountain in the world?",
  //       options: ["Kilimanjaro", "Everest", "Denali", "Aconcagua"],
  //       answer: "Everest",
  //       disabled: false
  //     },
  //     {
  //       id: 3,
  //       question: "Who wrote the Harry Potter series?",
  //       options: ["J.K. Rowling", "Stephenie Meyer", "Suzanne Collins", "George R.R. Martin"],
  //       answer: "J.K. Rowling",
  //       disabled: false
  //     }
  //     ]);

  // ! Get Data from database

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
    const n = 8; // number of elements we want to get
    const shuffledArray = filtered.sort(() => 0.5 - Math.random()); // shuffles array
    const resultData = shuffledArray.slice(0, n + 2); // gets first n elements after shuffle
    setQuestions(resultData);
  }

  console.log(questions);

  // ! Check and count the number of correct answers for each question in the array

  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );
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

  // if(questions[1]){
  //   setFormStyle("hidden");
  // }

  if (score === 3 || score > 3) {
    toast.success(`Your score is ${score}`);
    // setNextButtonStyle("block");
    navigate("/dashboard/add-Teacher");
  }
  if (score <= 2) {
    toast.error(`Your score is ${score} but the passing marks is 3`);
    navigate("/");
  }

  return (
    <div className="mx-5 lg:mx-10">
      {/* TODO: Selector */}
      <div className="my ">
        <div>
          <label
            className="block text-black dark:text-gray-300 text-xl font-semibold mt-6"
            id="title"
          >
            Select Your Department That You Want To Teach
          </label>
          <p className="text-[#1AA3D0] dark:text[#00A99D] font-bold">
            your marks: {score}
          </p>

          {/* Selector */}
          <select
            name="background"
            // className="select  h-11 text-gray-800 border border-green-400 mt-1 rounded w-full bg-sky-50"
            className="select  h-11 text-gray-800  mt-4 rounded w-1/2 bg-sky-50 border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D]"
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
      {questions[1] && (
        <div>
          {questions.map((question, index) => (
            <div className="my-3" key={question.id}>
              <p className="text-start p-1 rounded-lg pl-2 mt-8 lg:mt-4 mb-6 lg:mb-2 dark:text-gray-900 font-bold bg-yellow-300 w-2/3 mx-auto">
                {question.question}
              </p>
              {question.options.map((option, optionIndex) => (
                <div
                  className="text-start dark:text-gray-200 w-2/3 mx-auto"
                  key={optionIndex}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    disabled={
                      question.disabled && userAnswers[index] !== option
                    }
                    onChange={() => handleAnswerSelect(index, option)}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          ))}

          <button
            className="btn bg-gradient-to-r from-[#1AA3D0] to-[#00A99D] ... my-10 w-2/3 font-bold"
            onClick={calculateScore}
          >
            Submit
          </button>
        </div>
      )}

      {/* <Link to={'/dashboard/add-Teacher'}>
       <button className='btn btn-success my-10 w-1/3'>Next</button>
   </Link> */}
    </div>
  );
};

export default TutorTestQuestion;
