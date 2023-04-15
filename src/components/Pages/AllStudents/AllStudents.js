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

  console.log(students);

  return (
    <div className=" my-16 mx-6  dark:bg-[#350573]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-8 pb-8 pr-8 ">
        {students?.map((student) => (
          // <div className="card  shadow-md shadow-dark-mid shadow-black transform hover:scale-105 transition duration-300 border rounded-none">
          //   <Link>
          //     <figure className="px-2 pt-2">
          //       <img className="w-full h-52" src={student?.image} alt="Img" />
          //     </figure>
          //   </Link>
          //   <div className="card-body text-start">
          //     <Link to="">
          //       <p className="card-title text-lg">
          //         Name: <span className="text-sm">{student?.name}</span>
          //       </p>
          //     </Link>
          //     <Link to="">
          //       <p className="card-title text-lg">
          //         Email: <span className="text-sm">{student?.email}</span>
          //       </p>
          //     </Link>
          //     <p className="card-title text-lg">
          //       Phone: <span className="text-sm">{student?.phone}</span>
          //     </p>
          //   </div>
          // </div>

          <div className="">
            <div className="px-25 mx-auto ">
              <div className="flex  flex-col">
                <div class="max-w-2xl  mx-auto">
                  <div class=" shadow-md border text-start dark:bg-gray-500  border-gray-300 rounded max-w-sm dark:border-gray-300">
                    <img
                      alt="teacher"
                      className="object-cover h-[201px] w-[300px] mx-auto object-center block"
                      src={student?.image}
                    />

                    <div class="p-5">
                      <p class="font-bold text-xl flex   dark:text-white text-gray-800">
                        <BsFillPersonFill className="mt-1 mr-3" />

                        {student?.name}
                      </p>

                      <p class="font-bold text-md  mb-3 flex  dark:text-white text-gray-800">
                        <MdMarkEmailUnread className="mt-1 mr-3" />{" "}
                        {student?.email}
                      </p>
                      <p class="font-bold text-md  mb-3 flex  dark:text-white text-gray-800">
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
