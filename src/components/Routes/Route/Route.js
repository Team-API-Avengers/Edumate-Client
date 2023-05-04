import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Authentication/Login/Login";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
// import WelcomeDashboard from "../../Pages/WelcomeDashboard/WelcomeDashboard";
import Signup from "../../Pages/Authentication/Signup/Signup";
import BackgroundWiseTeacher from "../../Pages/BackgroundWiseTeacher/BackgroundWiseTeacher";
import AddTeacher from "../../Pages/AddTeacher/AddTeacher";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import Error from "../../Pages/Error/Error";
import ContactUs from "../../Pages/Contact/ContactUs";
import MyTeachers from "../../Pages/MyTeachers/MyTeachers";
import Instructors from "../../Pages/Instructors/Instructors";
import InstructorDetails from "../../Pages/Instructors/InstructorDetails";
import AboutOurs from "../../Pages/Home/AboutOurs/AboutOurs";
import BlogDetails from "../../Pages/Blog/BlogDetails";
import AllStudents from "../../Pages/AllStudents/AllStudents";
import AddBlog from "../../Pages/AddBlog/AddBlog";
import MyStudents from "../../Pages/MyStudents/MyStudents";
import AddContributors from "../../Pages/AddContributors/AddContributors";
import Settings from "../../Layouts/Settings/Settings";
import BannerEdit from "../../Pages/BannerEdit/BannerEdit";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Form from "../../Layouts/Form/Form";
import Reviews from "../../Pages/Reviews/Reviews";
import TutorTest from "../../Pages/AddTeacher/TutorTest/TutorTest";

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
            `https://edumate-second-server.vercel.app/api/v1/tutor/${params._id}`
          );
        },
      },
      
      {
        path: "/about-ours",
        element: <AboutOurs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/feedback",
        element: <Reviews />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/blog/:_id",
        element: <BlogDetails />,
        loader: ({ params }) => {
          return fetch(
            `https://edumate-second-server.vercel.app/api/v1/blogs/${params?._id}`
          );
        },
      },
      {
        path: "/addBlog",
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "/:background",
        element: <BackgroundWiseTeacher />,
        loader: ({ params }) => {
          return fetch(
            `https://edumate-second-server.vercel.app/api/v1/tutor/instructor/${params.background}`
          );
        },
      },
    ],
  },






  {
    path: "/authentication",
    element: <Form />,
    children: [
      {
        path: "/authentication/login",
        element: <Login />,
      },
      {
        path: "/authentication/signup",
        element: <Signup />,
      },
    ],
  },





  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // {
      //   path: "/dashboard",
      //   element: <WelcomeDashboard />,
      // },
      {
        path: "/dashboard",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/add-Teacher",
        element: (
          <PrivateRoute>
            <AddTeacher />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/tutor-test",
        element: <TutorTest />
      },
      
      {
        path: "/dashboard/add-contributors",
        element: <AddContributors />,
      },
      {
        path: "/dashboard/my-Teachers",
        element: <MyTeachers />,
      },
      {
        path: "/dashboard/all-Teachers",
        element: <Instructors />,
      },

      {
        path: "/dashboard/all-students",
        element: <AllStudents />,
      },

      {
        path: "/dashboard/my-students",
        element: <MyStudents />,
      },
    ],
  },

  {
    path: "/settings",
    element: <Settings />,
    children: [
      {
        path: "/settings",
        element: <BannerEdit />,
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
