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
import Contact from "../../Pages/Contact/Contact";
import OurBestTeachers from "../../Pages/Home/OurBestTeachers/OurBestTeachers";

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
        path: "/about-ours",
        element: <AboutOurs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/allTeachers",
        element: <OurBestTeachers />,
        loader: () => {
          return fetch(`https://edumate-server.vercel.app/api/v1/tutor`);
        },
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
        element: <Contact />,
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
