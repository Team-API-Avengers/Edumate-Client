import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Authentication/Login/Login";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import WelcomeDashboard from "../../Pages/WelcomeDashboard/WelcomeDashboard";
import Signup from "../../Pages/Authentication/Signup/Signup";
import BackgroundWiseTeacher from "../../Pages/BackgroundWiseTeacher/BackgroundWiseTeacher";
import AddTeacher from "../../Pages/AddTeacher/AddTeacher";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import Error from "../../Pages/Error/Error";
import AboutOurs from "../../Pages/About/AboutOurs";

import OurBestTeachers from "../../Pages/Home/OurBestTeachers/OurBestTeachers";
import AllTeachers from "../../Pages/AllTeachers/AllTeachers";
import ContactUs from "../../Pages/Contact/ContactUs";
import MyTeachers from "../../Pages/MyTeachers/MyTeachers";
import Instructors from "../../Pages/Instructors/Instructors";
import InstructorDetails from "../../Pages/Instructors/InstructorDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/all-Teachers",
        element: <Instructors />,
      },
      {
        path: "/instructor/:_id",
        element: <InstructorDetails />,
        loader: ({ params }) => {
          return fetch(
            `https://edumate-server.vercel.app/api/v1/tutor/${params._id}`
          );
        },
      },
      {
        path: "/about-ours",
        element: <AboutOurs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/background/:background",
        element: <BackgroundWiseTeacher />,
        loader: ({ params }) => {
          return fetch(
            `https://edumate-server.vercel.app/api/v1/tutor/${params.background}`
          );
        },
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <WelcomeDashboard />,
      },
      {
        path: "/dashboard/add-Teacher",
        element: <AddTeacher />,
      },
      {
        path: "/dashboard/My-Profile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/contact",
        element: <ContactUs />,
      },
      {
        path: "/dashboard/my-Teachers",
        element: <MyTeachers />,
      },
      {
        path: "/dashboard/all-Teachers",
        element: <AllTeachers />,
        loader: () => {
          return fetch(`https://edumate-server.vercel.app/api/v1/tutor`);
        },
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
    // element: <div>Error 404 page</div>,
  },
]);

export default router;
