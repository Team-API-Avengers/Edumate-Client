import React, { useContext, useState } from "react";
import { AiFillStar, AiOutlineDelete } from "react-icons/ai";
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

  const { user, logUser } = useContext(AuthContext);
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
        if (data.data === "already booked") {
          toast.error("You already booked that teacher");
        } else {
          toast.success("Successfully booked your teacher");
          navigate("/dashboard/my-Teachers");
        }
        console.log(data);
        navigate("/dashboard/my-Teachers");
      });
  };

  // delete teacher
  const deleteTeacher = (data) => {
    // console.log(data);
    fetch(
      `https://edumate-second-server.vercel.app/api/v1/tutor/${data?._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data.deletedCount > 0) {
          toast.success("Teacher removed 🤞");
        }
        navigate("/dashboard/all-Teachers");
      });
  };
  return (
    <div>
      <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white dark:bg-black dark:text-gray-300">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="teacher"
                className="lg:w-1/2 w-full object-cover  object-center rounded-full "
                src={details?.data?.image}
              />
              <div className="lg:w-1/2 w-full space-y-2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-md font-bold text-start text-[#1AA3D0] dark:text-[#00A99D]">
                  {details?.data?.background}
                </h2>
                <div className="flex justify-between">
                  <h1 className="text-gray-900 dark:text-gray-300 text-3xl title-font font-medium mb-1">
                    {details?.data?.name}
                  </h1>
                  <div className="flex mb-4">
                    <AiFillStar className="w-4 h-4 text-yellow-400 " />
                    <AiFillStar className="w-4 h-4 text-yellow-400 " />
                    <AiFillStar className="w-4 h-4 text-yellow-400 " />
                    <AiFillStar className="w-4 h-4 text-yellow-400 " />
                  </div>
                </div>
                <div className="text-start">
                  <p className="flex ">
                    <BsTelephoneFill className="mt-1 mr-1" />
                    {details?.data?.phone}
                  </p>

                  <p className="flex ">
                    <BsHourglassSplit className="mt-1 mr-1" />
                    {details?.data?.experience} years experience
                  </p>
                  <p className="flex ">
                    <TbCurrencyTaka className="mt-1 mr-1 -ml-1 text-xl" />{" "}
                    <h1>{details?.data?.fee}</h1>
                  </p>
                  <p className="flex ">
                    <HiLocationMarker className="mt-1 mr-1" />
                    {details?.data?.location}
                  </p>
                  <p className="flex ">
                    <MdMarkEmailUnread className="mt-1 mr-1" />
                    {details?.data?.email}
                  </p>
                </div>
                <p className="leading-relaxed text-start">
                  {details?.data?.bio}
                </p>

                <div className="flex justify-between">
                  <button
                    onClick={() => bookTeacher(details.data)}
                    className="group relative inline-flex mt-5 items-center overflow-hidden border border-black bg-[#1AA3D0] dark:bg-[#00A99D] px-8 py-4 text-white focus:outline-none focus:ring active:bg-blue-500 rounded-full"
                  >
                    <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                      <BsArrowRight />
                    </span>

                    <span className="text-sm font-bold  transition-all group-hover:mr-4">
                      Book Now
                    </span>
                  </button>
                  <div>
                    {logUser?.role === "Admin" && (
                      <>
                        <button
                          onClick={() => deleteTeacher(details?.data)}
                          className=" text-white font-bold flex gap-2 mt-5  rounded-full border py-4 px-8 bg-red-700"
                        >
                          Remove <AiOutlineDelete className=" text-xl" />
                        </button>
                      </>
                    )}
                  </div>
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
