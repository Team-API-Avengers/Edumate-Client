import React, { useState } from "react";
import OurBestTeacher from "./OurBestTeacher";

import { useLoaderData } from "react-router-dom";

const OurBestTeachers = () => {
  const [tutor, setTutor] = useState(null);

  const AllTeachers = useLoaderData();
  console.log(AllTeachers);

  return (
    <div className=" mx-auto mt-10 max-w-screen-xl">
      <div className="flex">
        <h1 className="text-4xl uppercase text-start font-bold">
          Here Is our <br />
          best teachers
        </h1>
        <div className="divider  bg-black  w-1 divider-horizontal"></div>
        <p className="flex text-xl text-black flex-col font-semibold justify-center items-center">
          Get access to our top-performing teachers and take your learning to
          the next level.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {AllTeachers?.data?.map((teacher, index) => (
          <OurBestTeacher
            setTutor={setTutor}
            teacher={teacher}
            key={index}
          ></OurBestTeacher>
        ))}
      </div>
    </div>
  );
};

export default OurBestTeachers;
