import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import StatusModal from "../../Modals/StatusModal";
import { useState } from "react";
import { useEffect } from "react";

const StudentPostBox = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* <div className="my-5 mx-10">
              <h1>Name/ Location / Department</h1>
            <div className=" bg-base-200 px-4 flex flex-col py-5 sm:flex-row items-start justify-center sm:items-center shadow-lg dark:rounded-b-lg">
            <input
            placeholder="Search your tutor"
            type="text"
            className="text-black h-12 w-1/2 rounded-full"
          />
        //   <button className="btn btn-primary rounded-none h-10">Search</button>
            </div>
            </div> */}

      <div className=" flex justify-center my-10">
        {user?.photoURL ? (
          <Link
            title="Profile"
            to="/dashboard"
            className="avatar cursor-pointer online mx-5"
          >
            <div className="w-16 h-16 rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="img" />
            </div>
          </Link>
        ) : (
          <img
            className="w-16 h-16 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
            alt=""
          />
        )}
        <label
          title="Post your requirement"
          htmlFor="Status-Modal"
          className="flex photo hover:cursor-pointer"
        >
          <p className="flex items-center dark:bg-slate-100 dark:text-black mx-1 border-4 border-[#1AA3D0] dark:border-[#00A99D] md:pr-32 pr-10 pl-2 rounded-3xl">
            Post your requirement
          </p>
        </label>

        <StatusModal />
      </div>
    </div>
  );
};

export default StudentPostBox;
