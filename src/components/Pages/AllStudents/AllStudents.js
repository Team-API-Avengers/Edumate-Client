import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader";
// import { AuthContext } from "../../Context/AuthProvider";
import {
  BsFillPersonFill,
  // BsHourglassSplit,
  BsTelephoneFill,
} from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";

const AllStudents = () => {
  const [students, SetStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://edumate-second-server.vercel.app/api/v1/user/dash/student`)
      .then((res) => res.json())
      .then((data) => SetStudent(data?.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  // console.log(students);

  return (
    <div>
      <div className="hidden lg:block">
        {students?.map((student, idx) => (
          <div key={idx}>
            <div className="card lg:card-side rounded-full bg-gradient-to-b from-[#1AA3D0] to-[#00A99D] ... h-52 text-gray-100 dark:text-gray-100 shadow-xl m-8">
              <img className="w-60 h-full rounded-full object-cover" src={student?.image} alt="" />
              <div className="card-body">
                <h2 className="card-title">{student?.name}</h2>
                <p className="text-start">{student?.email}</p>
                <p className="text-start">{student?.phone}</p>
                <div className="card-actions justify-end">
                  <button className="learn-more ">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text dark:text-gray-100">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:hidden">
        {students?.map((student, idx) => (
          <div className="px-25 my-10 mx-auto">
            <div className="flex  flex-col ">
              <div className="max-w-2xl  mx-auto">
                <div className=" shadow-md border text-start dark:bg-gray-300  border-gray-300 rounded max-w-sm dark:border-gray-300">
                  <img
                    alt="teacher"
                    className="object-cover h-[201px] w-[300px] mx-auto object-center block"
                    src={student?.image}
                  />

                  <div className="p-5">
                    <p className="font-bold text-xl flex text-gray-800">
                      <BsFillPersonFill className="mt-1 mr-3" />

                      {student?.name}
                    </p>

                    <p className="font-bold text-md   flex   text-gray-800">
                      <MdMarkEmailUnread className="mt-1 mr-3" /> {student?.email}
                    </p>
                    <p className="font-bold text-md  mb-3 flex   text-gray-800">
                      <BsTelephoneFill className="mt-1 mr-3" />
                      {student?.phone}
                    </p>
                  </div>

                  <button className="learn-more mx-5">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text dark:text-[#bb86fc]">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudents;
