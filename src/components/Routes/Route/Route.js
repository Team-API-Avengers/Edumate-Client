import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Authentication/Login/Login";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import WelcomeDashboard from "../../Pages/WelcomeDashboard/WelcomeDashboard";
import TeacherSignup from "../../Pages/Authentication/TeacherSignup/TeacherSignup";
import StudentSignup from "../../Pages/Authentication/StudentSignup/StudentSignup";
import SubjectWiseTeacher from "../../Pages/SubjectWiseTeacher/SubjectWiseTeachers";

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
        path: "/signup-teacher",
        element: <TeacherSignup />,
      },
      {
        path: "/signup-student",
        element: <StudentSignup />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      // {
      //   path: "/contact", element: <Contact />,
      // },
      {
        path: "/teachers",
        element: <SubjectWiseTeacher></SubjectWiseTeacher>,
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
      //   {
      //     path: "/dashboard/profile", element: <MyProfile />,
      //   },
      //   {
      //     path: "/dashboard/add-teacher", element: <AddTeacher />,
      //   },
      //   {
      //     path: "/dashboard/all-teachers", element: <AllTeachers />,
      //   },
      //   {
      //     path: "/dashboard/all-students", element: <AllStudents />,
      //   },
    ],
  },

  {
    path: "*",
    element: <div>Error 404 page</div>,
  },
]);

export default router;
