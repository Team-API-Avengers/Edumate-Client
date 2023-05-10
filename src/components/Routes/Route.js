import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Layouts/Dashboard";
import Signup from "../Pages/Authentication/Signup";
import BackgroundWiseTeacher from "../Pages/BackgroundWiseTeacher/BackgroundWiseTeacher";
import AddTeacher from "../Pages/AddTeacher/AddTeacher";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Error from "../Pages/Error/Error";
import ContactUs from "../Pages/Home/ContactUs";
import MyTeachers from "../Pages/MyTeachers/MyTeachers";
import Instructors from "../Pages/Instructors/Instructors";
import InstructorDetails from "../Pages/Instructors/InstructorDetails";
import BlogDetails from "../Pages/Blog/BlogDetails";
import AllStudents from "../Pages/AllStudents/AllStudents";
import AddBlog from "../Pages/AddBlog/AddBlog";
import MyStudents from "../Pages/MyStudents/MyStudents";
import Settings from "../Layouts/Settings";
import BannerEdit from "../Pages/BannerEdit/BannerEdit";
import PrivateRoute from "./PrivateRoute";
import Form from "../Layouts/Form";
import TutorTest from "../Pages/AddTeacher/TutorTest";
import Gallery from "../Pages/Gallery/Gallery";
import StudentPostBox from "../Pages/StudentPostBox/StudentPostBox";
import AboutOurs from "../Pages/About/AboutOurs";
import PaymentFail from "../Pages/MyTeachers/PaymentFail";
import PaymentNotification from "../Pages/MyTeachers/PaymentNotification";
import TutorTestQuestion from "../Pages/TutorTestQuestion/TutorTestQuestion";
import SkillAssessments from "../Pages/SkillAssessments/SkillAssessments";
import TeacherRoute from "./TeacherRoute";
import TeacherCertificate from "../Pages/TeacherCertificate/TeacherCertificate";
// import Quiz from "../Pages/Quiz/Quiz";

const router = createBrowserRouter([
  //! Main Pages
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
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/all-Teachers",
        element: <Instructors />,
      },
      {
        path: "/instructor/:_id",
        element: <InstructorDetails />,
        loader: ({ params }) => {
          return fetch(`https://edumate-second-server.vercel.app/api/v1/tutor/${params._id}`);
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
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/blog/:_id",
        element: <BlogDetails />,
        loader: ({ params }) => {
          return fetch(`https://edumate-second-server.vercel.app/api/v1/blogs/${params?._id}`);
        },
      },

      {
        path: "/:background",
        element: <BackgroundWiseTeacher />,
        loader: ({ params }) => {
          return fetch(`https://edumate-second-server.vercel.app/api/v1/tutor/instructor/${params.background}`);
        },
      },
    ],
  },

  //! Authentication Pages
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

  //! Dashboard Pages
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/add-Teacher",
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <AddTeacher />
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/tutor-test",
        element: <TutorTest />,
      },
      // {
      //   path: "/dashboard/tutor-quiz-test",
      //   element: <Quiz />,
      // },
      {
        path: "/dashboard/tutor-test-question",
        element: (
          <TeacherRoute>
            <TutorTestQuestion />
          </TeacherRoute>
        ),
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
        path: "/dashboard/skill-assessments",
        element: <SkillAssessments />,
      },

      {
        path: "/dashboard/my-achievement-certificate",
        element: <TeacherCertificate />,
      },

      {
        path: "/dashboard/my-students",
        element: <MyStudents />,
      },

      {
        path: "/dashboard/student-post-box",
        element: <StudentPostBox />,
      },
      {
        path: "/dashboard/payment/fail",
        element: <PaymentFail />,
      },
      {
        path: "/dashboard/addBlog",
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },

      // this is the notification component for invoice ---
      {
        path: "/dashboard/payment/success",
        element: <PaymentNotification />,
      },
    ],
  },

  //! Settings Page
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

  //! Error Page
  {
    path: "*",
    element: <Error />,
    // element: <div>Error 404 page</div>,
  },
]);

export default router;
