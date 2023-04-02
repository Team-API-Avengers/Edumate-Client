import React from "react";
import { AiFillStar } from "react-icons/ai";
const OurBestTeacher = ({ teacher }) => {
  const {
    number,
    name,
    location,
    experience,
    image,
    background,
    email,
    bgColour,
  } = teacher;
  console.log(teacher);
  return (
    <div>
      <div className="px-25 mx-auto py-10">
        <div class="flex flex-col ">
          <a class="block relative  overflow-hidden">
            <img
              alt="ecommerce"
              class="object-cover h-[200px] w-[750px] mx-auto object-center block"
              src={image}
            />
          </a>
          <div class={`  ${bgColour}`}>
            <div className="m-10 space-y-2">
              <h3 class="text-white text-sm text-start title-font ">
                {background}
              </h3>
              <h2 class="text-gray-900 title-font text-start text-lg font-medium">
                {name}
              </h2>
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBestTeacher;
