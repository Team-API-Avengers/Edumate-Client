import SubjectWiseTeacher from "./SubjectWiseTeacher";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import science from "../../Assets/science.png";
import commerce from "../../Assets/commerce.png";
import humanity from "../../Assets/humanity.png";
import all from "../../Assets/all.png";
import { useEffect, useState } from "react";

const SubjectWiseTeachers = () => {
  const [backgrounds, setBackground] = useState([]);
  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`).then((res) =>
      res.json().then((data) => setBackground(data?.data))
    );
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">Department</h1>
      <p className="mt-2">Select which department you need a teacher for</p>
      {backgrounds.map((category) => (
        <div className=" max-w-screen-lg mt-10 mb-10 mx-auto">
          <div class="container grid grid-cols-2 gap-10 px-5 py-1  mx-auto">
            <Link>
              <div class=" flex justify-between items-center rounded-lg border bg-white border-gray-200 p-4 h-36   hover:border-green-500 ">
                <div className="flex">
                  <img className="w-14 mt-3 h-12" src={science} alt="" />
                  <div className="ml-5">
                    <h2 class="mt-2 text-start  text-xl font-bold">Science</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      10 teachers available
                    </p>
                  </div>
                </div>{" "}
                <div className="mr-5">
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>
            <Link>
              <div class=" flex justify-between items-center rounded-lg border  bg-white border-gray-200 p-4 h-36   hover:border-green-500 ">
                <div className="flex">
                  <img className="w-14 mt-3 h-12" src={commerce} alt="" />
                  <div className="ml-5">
                    <h2 class="mt-2 text-start  text-xl font-bold">Commerce</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      10 teachers available
                    </p>
                  </div>
                </div>{" "}
                <div className="mr-5">
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>
            <Link>
              <div class=" flex justify-between items-center rounded-lg  border bg-white border-gray-200 p-4 h-36   hover:border-green-500 ">
                <div className="flex">
                  <img className="w-14 mt-3 h-12" src={humanity} alt="" />
                  <div className="ml-5">
                    <h2 class="mt-2 text-start  text-xl font-bold">Humanity</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      10 teachers available
                    </p>
                  </div>
                </div>{" "}
                <div className="mr-5">
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>{" "}
            <Link to={"/all-Teachers"}>
              <div class=" flex justify-between items-center rounded-lg border bg-white border-gray-200 p-4 h-36   hover:border-green-500 ">
                <div className="flex">
                  <img className="w-14 mt-3 h-12" src={all} alt="" />
                  <div className="ml-5">
                    <h2 class="mt-2 text-start  text-xl font-bold">
                      All Department
                    </h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      10 teachers available
                    </p>
                  </div>
                </div>{" "}
                <div className="mr-5">
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>
          </div>

          {/* {teachers.map((teacher, i) => (
          <SubjectWiseTeacher key={i} teacher={teacher}></SubjectWiseTeacher>
        ))} */}
        </div>
      ))}
    </div>
  );
};

export default SubjectWiseTeachers;
