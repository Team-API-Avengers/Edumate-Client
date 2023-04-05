import React from "react";
import image from "../../../Assets/beateacher.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const BeATeacher = () => {
  return (
    <div>
      <div class="container px-6 py-16 max-w-screen-xl mx-auto">
        <div class=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div class="w-full ">
            <div class="text-start">
              <h1 className="text-5xl  font-bold text-blue-600">Become a tutor</h1>

              <p class="mt-3 w-1/2 font-bold text-black">
                Instructors from around the country teach hundreds of students on
                <span className="font-bold text-blue-600"> Edumate</span> . Inspire Minds, Shape Futures, Join the
                Teaching Profession.
              </p>

              <Link to={"/dashboard/add-Teacher"}>
                <div class="flex mt-5">
                  <button class="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-500">
                    <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                      <BsArrowRight />
                    </span>

                    <span class="text-sm font-medium transition-all group-hover:mr-4">Start Teaching</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0">
            <img class="w-full h-full lg:max-w-3xl" src={image} alt="Catalogue-pana.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeATeacher;
