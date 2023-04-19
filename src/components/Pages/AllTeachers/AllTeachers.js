import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import OurBestTeacher from "../Home/OurBestTeachers/OurBestTeacher";

import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const AllTeachers = () => {
  const { loading } = useContext(AuthContext);
  // const [tutor, setTutor] = useState(null);

  const AllTeachers = useLoaderData();

  // console.log(AllTeachers);
  if (loading) {
    return <Loader />;
  }

  return (
    <div className=" mx-auto mt-10 max-w-screen-xl">
      <div className="flex justify-center">
        <h1 className="text-2xl uppercase text-start font-bold">
          Here Is our <br />
          best teachers
        </h1>
        <div className="divider  bg-black  w-1 divider-horizontal"></div>
        <p className="flex text-xl w-1/2 text-black flex-col font-semibold justify-center items-center">
          Get access to our top-performing teachers and take your learning to
          the next level.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {AllTeachers?.data?.map((teacher, index) => (
          <OurBestTeacher teacher={teacher} key={index}></OurBestTeacher>
        ))}
      </div>
    </div>
  );
};

export default AllTeachers;
