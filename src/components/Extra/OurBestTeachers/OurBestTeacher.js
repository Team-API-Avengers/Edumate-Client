import React from "react";
import { AiFillStar } from "react-icons/ai";
// import { BsArrowRight } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
// import { Link } from "react-router-dom";
const OurBestTeacher = ({ teacher}) => {
  const { name, image, background } = teacher;
  // console.log(teacher);
  return (
    <div>
      <div className="px-25 mx-auto py-10">
        <div className="flex flex-col">
          <a href="#null" className="block relative  overflow-hidden">
          {image ?
          <img
          alt="teacher"
          className="object-cover h-[200px] w-[750px] mx-auto object-center block"
          src={image}
        />
        :
        <img
              alt="teacher"
              className="object-cover h-[200px] w-[750px] mx-auto object-center block"
              src='https://osoq.com/caricatures/gift-caricatures-images/teacher-school-caricature-807462.jpg'
            />
          }
            
          </a>
          <div className="bg-indigo-400">
            <div className="m-10 space-y-1">
              <h3 className="text-white text-md font-bold text-start title-font flex">
                {background} <FaBookReader className="mx-2 mt-2" />
              </h3>
              <h2 className="text-gray-900  text-start text-lg font-bold">
                {name}
              </h2>
              <p className="text-gray-900 text-start text-md font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-around pb-4">
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              {/* <Link
                to={`/background/${background}`}
                className="flex text-white cursor-pointer"
              >
                See All <BsArrowRight className="mt-1 mx-2" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBestTeacher;
