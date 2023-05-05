import React, { useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import {
  BsArrowRight,
  BsHourglassSplit,
  BsTelephoneFill,
} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdMarkEmailUnread } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Loader from "../../Shared/Loader";
import { AuthContext } from "../../Context/AuthProvider";
import { TbCurrencyTaka } from "react-icons/tb";
import { toast } from "react-toastify";

const InstructorDetails = () => {
  const details = useLoaderData();
  // console.log(details.data);

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  // console.log(user);

  const bookTeacher = (data) => {
    const teachername = data?.name;
    const teacheremail = data?.email;
    const teacherlocation = data?.location;
    const teacherphone = data?.phone;
    const teacherimage = data?.image;
    const teacherexperience = data?.experience;
    const teacherbackground = data?.background;
    const teacherfee = data?.fee;

    const myTeacherData = {
      teachername,
      teacheremail,
      teacherlocation,
      teacherphone,
      teacherimage,
      teacherexperience,
      teacherbackground,
      teacherfee,
      studentEmail: user?.email,
      studentName: user?.displayName,
      studentImage: user?.photoURL,
    };

    // console.log(myTeacherData);
    fetch(`https://edumate-second-server.vercel.app/api/v1/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myTeacherData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.status === "success") {
          toast.success("Successfully booked your teacher");
          navigate("/dashboard/my-Teachers");
        }
        if (data?.status === "error") {
          toast.error("You already booked that teacher");
        }
        // navigate("/dashboard/my-Teachers");
      });
  };

  return (
    <div>
      <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white dark:bg-black dark:text-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="teacher" className="lg:w-1/2 w-full object-cover  object-center rounded border border-gray-200"
                src={ details?.data?.image }
              />
              <div className="lg:w-1/2 w-full space-y-2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-md font-bold text-start text-green-700 dark:text-white">
                  { details?.data?.background }
                </h2>
                <div className="flex justify-between">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    { details?.data?.name }
                  </h1>
                  <div className="flex mb-4">
                    <AiFillStar className="w-4 h-4 text-green-700 dark:text-white" />
                    <AiFillStar className="w-4 h-4 text-green-700 dark:text-white" />
                    <AiFillStar className="w-4 h-4 text-green-700 dark:text-white" />
                    <AiFillStar className="w-4 h-4 text-green-700 dark:text-white" />
                  </div>
                </div>
                <div className="text-start">
                  <p className="flex ">
                    <BsTelephoneFill className="mt-1 mr-1" />
                    { details?.data?.phone }
                  </p>

                  <p className="flex ">
                    <BsHourglassSplit className="mt-1 mr-1" />
                    { details?.data?.experience } years experience
                  </p>
                  <p className="flex ">
                    <TbCurrencyTaka className="mt-1 mr-1 -ml-1 text-xl" />{ " " }
                    <h1>{ details?.data?.fee }</h1>
                  </p>
                  <p className="flex ">
                    <HiLocationMarker className="mt-1 mr-1" />
                    { details?.data?.location }
                  </p>
                  <p className="flex ">
                    <MdMarkEmailUnread className="mt-1 mr-1" />
                    { details?.data?.email }
                  </p>
                </div>
                <p className="leading-relaxed text-start">{ details?.data?.bio }</p>

                <div className="flex ">
                  <button
                    onClick={ () => bookTeacher(details.data) }
                    className="group relative inline-flex mt-5 items-center overflow-hidden border border-black bg-blue-600 px-8 py-4 text-white focus:outline-none focus:ring active:bg-blue-500"
                  >
                    <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                      <BsArrowRight />
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:mr-4">
                      Book Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InstructorDetails;
