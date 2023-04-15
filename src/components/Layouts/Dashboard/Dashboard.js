import React from "react";
import darkLogo from "../../Assets/dark-Logo.png"
import Header from "../../Shared/Header/Header";
import DashboardHeader from "../../Shared/DashboardHeader/DashboardHeader";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  
  
  return (
    <div>
      <div className="lg:block hidden">
      <Header />
      </div>
      <div className="block lg:hidden">
        <DashboardHeader />
      </div>




       {/* Drawer Content */}
      <div className="drawer drawer-mobile">

        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />



        <div className="drawer-content">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side border">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 bg-base-100 text-base-content">
            <Link to="/home" className="flex lg:hidden mb-10">
              <img
                src={darkLogo}
                className="mr-3 h-6 sm:h-9 rounded-lg"
                alt="darkLogo"
              />
              <span className="self-center text-xl font-semibold  ">
                Edumate
              </span>
            </Link>
            <li className=" ">
              <Link to="/dashboard/My-Profile">My Profile</Link>
            </li>
            
            {/* {logUser?.role === 'Admin' && */}
            <>
            <li className="">
                <Link to="/dashboard/all-Teachers">All Teacher</Link>
              </li>
              <li className="">
                <Link to="/dashboard/all-students">All Students</Link>
              </li>
              <li className="">
                <Link to="/dashboard/add-contributors">Add Contributors</Link>
              </li>
            </>
            {/* } */}

           {/* {logUser?.role === 'Teacher' && */}
            <>
            <li className="">
              <Link to="/dashboard/add-Teacher">Be a teacher</Link>
            </li>

            <li className="">
              <Link to="/dashboard/my-students">My Students</Link>
            </li>

            <li className="">
              <Link to="/dashboard/my-Teachers">My Teachers</Link>
            </li>
            
          </>
         {/* } */}

         

          </ul>
        </div>



 



      </div>






    </div>
  );
};

export default DashBoard;
