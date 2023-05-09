import { useEffect, useState } from "react";

function Quiz() {

    const [questions, setQuestions] = useState([])
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
    const n = 3; // number of elements we want to get
    const shuffledArray = filtered.sort(() => 0.5 - Math.random()); // shuffles array
    const resultData = shuffledArray.slice(0, n + 2); // gets first n elements after shuffle
    setQuestions(resultData);
  }

  console.log(questions);








// ! Check and count the number of correct answers for each question in the array 

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);

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

  return (
    <div>
       {/* TODO: Selector */}
       <div className="my">
       <div>
          <label className="block text-black dark:text-gray-300 text-xl font-semibold" id="title">
            Select Your Department That You Want To Teach
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
      {questions.map((question, index) => (
        <div key={question.id}>
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
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
      <button onClick={calculateScore}>Submit</button>
      <p>Your score: {score}</p>
    </div>
  );
}

export default Quiz;
