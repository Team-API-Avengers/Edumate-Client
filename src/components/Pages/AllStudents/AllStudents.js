import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import { AuthContext } from "../../Context/AuthProvider";
import {
  BsFillPersonFill,
  BsHourglassSplit,
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
    <div className=" m-5 dark:bg-[#350573]">
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 md:gap-6  gap-4 max-w-screen-xl mx-auto">
        {students?.map((student) => (
          <div>
            <div className="px-25 mx-auto ">
              <div className="flex  flex-col">
                <div class="max-w-2xl  mx-auto">
                  <div class=" shadow-md border text-start dark:bg-gray-300  border-gray-300 rounded max-w-sm dark:border-gray-300">
                    <img
                      alt="teacher"
                      className="object-cover h-[201px] w-[300px] mx-auto object-center block"
                      src={student?.image}
                    />

                    <div class="p-5">
                      <p class="font-bold text-xl flex    text-gray-800">
                        <BsFillPersonFill className="mt-1 mr-3" />

                        {student?.name}
                      </p>

                      <p class="font-bold text-md  mb-3 flex   text-gray-800">
                        <MdMarkEmailUnread className="mt-1 mr-3" />{" "}
                        {student?.email}
                      </p>
                      <p class="font-bold text-md  mb-3 flex   text-gray-800">
                        <BsTelephoneFill className="mt-1 mr-3" />
                        {student?.phone}
                      </p>
                    </div>
                  </div>
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
