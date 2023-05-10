import React, { useEffect, useState } from "react";
import Loader from "../../Shared/Loader";

const Gallery = () => {
  //   const [allInstructor, setInstructors] = useState({});

  const [allStudents, SetStudent] = useState([]);

  const [allUser, setAllUser] = useState({});

  // console.log('allInstructor', allInstructor);

  // console.log('allStudents', allStudents);

  const [loading, setLoading] = useState(false);

  const handleStudents = () => {
    // alert('students')
    setLoading(true);
    fetch(`https://edumate-second-server.vercel.app/api/v1/user/dash/student`)
      .then((res) => res.json())
      .then((data) => setAllUser(data?.data))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/user/dash/student`)
      .then((res) => res.json())
      .then((data) => SetStudent(data?.data));
  }, []);

  const handleTeachers = () => {
    //    alert('Teachers')
    setLoading(true);
    fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`)
      .then((res) => res.json())
      .then((data) => setAllUser(data?.data))
      .finally(() => {
        setLoading(false);
      });
  };

  console.log(allUser);
  console.log(allStudents);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mx-10 mb-4">
      <div className="flex justify-center py-10">
        <button onClick={handleTeachers} className="btn mx-3 border-none  bg-[#1AA3D0] hover:bg-[#00A99D]">
          Teachers
        </button>
        <button onClick={handleStudents} className="btn mx-3 border-none   bg-[#1AA3D0] hover:bg-[#00A99D]">
          Students
        </button>
      </div>

      {allUser[1] ? (
        <div>
          <h1 className="my-5 text-semibold flex justify-center dark:text-gray-200">
            <span className="mx-1">{allUser?.length}</span>
            <span className="mx-1">{allUser[1]?.role}'s</span>
            <span className="mx-1">Available</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {allUser?.map((data, idx) => (
              <img
                key={idx}
                className="object-cover w-full dark:bg-gray-500 aspect-square rounded-lg"
                src={data?.image}
                alt=""
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="my-5 text-semibold flex justify-center dark:text-gray-200">
            <span className="mx-1">{allStudents?.length}</span>
            <span className="mx-1">{allStudents[1]?.role}'s</span>
            <span className="mx-1">Available</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {allStudents?.map((data, idx) => (
              <img key={idx} className="object-cover w-full dark:bg-gray-500 aspect-square" src={data?.image} alt="" />
            ))}
          </div>
        </div>
      )}

      {/* {
            allUser?
            <div class="container mx-auto px-5 py-2 lg:px-32">
            <div class="-m-1 flex flex-wrap md:-m-2">

                <div class="flex w-1/2 flex-wrap">
                    
                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allUser[1]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allUser[2]?.image} />
                </div>

                <div class="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allUser[3]?.image} />
                </div>

                </div>

                <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-96 w-full rounded-lg object-cover object-center"
                    src={allUser[4]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allUser[5]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allUser[6]?.image} />
                </div>

                </div>
            </div>
            </div>
            :
            <div class="container mx-auto px-5 py-2 lg:px-32">
            <div class="-m-1 flex flex-wrap md:-m-2">

                <div class="flex w-1/2 flex-wrap">
                    
                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[1]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[2]?.image} />
                </div>

                <div class="w-full p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[3]?.image} />
                </div>

                </div>

                <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[4]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[5]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[6]?.image} />
                </div>

                </div>
            </div>
            </div>
            } */}
    </div>
  );
};

export default Gallery;
