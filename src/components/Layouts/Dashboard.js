import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import darkLogo from "../Assets/Logos/EDU_Dark_Logo.png";
import logo from "../Assets/Logos/EDU_LOGO.png";
import Loader from "../Shared/Loader";
import Header from "../Shared/Header";
import { AuthContext } from "../Context/AuthProvider";
import DashboardHeader from "../Shared/DashboardHeader";
import {
  FaBlogger,
  FaChalkboardTeacher,
  FaHouseUser,
  FaUsers,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BsFillPostcardFill } from "react-icons/bs";
import { TbGiftCard } from "react-icons/tb";
const DashBoard = () => {
  const { user, logUser, theme, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="lg:block hidden">
        <Header />
      </div>
      <div className="block lg:hidden">
        <DashboardHeader />
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content">
          <Outlet></Outlet>

          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button hidden"
          >
            Open drawer
          </label>
        </div>

        <div className="drawer-side border dark:bg-black dark:text-[#bb86fc] shadow-lg dark:shadow-white lg:ml-5">
          <label
            htmlFor="dashboard-drawer"
            className="drawer-overlay bg-transparent shadow-lg "
          ></label>
          <ul className="menu p-4 w-60 bg-base-100 dark:bg-black dark:text-gray-100 shadow-lg  text-base-content">
            <Link to="/home" className="flex lg:hidden mb-10">
              <span className="text-4xl font-bold">
                {theme === "dark" ? (
                  <img className="w-32" src={darkLogo} alt="darkLogo" />
                ) : (
                  <img className="w-32" src={logo} alt="logo" />
                )}
              </span>
            </Link>
            <li className=" ">
              <Link to="/dashboard">
                <FaHouseUser />
                My Profile
              </Link>
            </li>

            {user && (
              <li>
                <Link to="/dashboard/addBlog">
                  <FaBlogger />
                  Add Blog
                </Link>
              </li>
            )}

            {logUser?.role === "Admin" && (
              <>
                <li className="">
                  <Link to="/dashboard/all-Teachers">
                    <GiTeacher />
                    All Teacher
                  </Link>
                </li>
                <li className="">
                  <Link to="/dashboard/all-students">
                    <FaUsers />
                    All Students
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/tutor-test-question">
                    <FaChalkboardTeacher />
                    Be a teacher
                  </Link>
                </li>
              </>
            )}

            {logUser?.role === "Teacher" && (
              <>
                <li className="">
                  <Link to="/dashboard/tutor-test-question">
                    <FaChalkboardTeacher />
                    Be a teacher
                  </Link>
                </li>

                <li className="">
                  <Link to="/dashboard/my-students">
                    <FaUsers />
                    My Students
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/my-achievement-certificate">
                    <TbGiftCard />
                    my Achievement
                  </Link>
                </li>
              </>
            )}

            {logUser?.role === "Student" && (
              <>
                <li className="">
                  <Link to="/dashboard/my-Teachers">
                    <GiTeacher />
                    My Teachers
                  </Link>
                  <Link to="/dashboard/student-post-box">
                    <BsFillPostcardFill /> Post Field
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
