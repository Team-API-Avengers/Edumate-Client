import React from "react";
import { createBrowserRouter} from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Authentication/Login/Login";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import WelcomeDashboard from "../../Pages/WelcomeDashboard/WelcomeDashboard";
import Signup from "../../Pages/Authentication/Signup/Signup";

const router = createBrowserRouter([
          {
            path: "/", element: <Main />,
            children: [
              {
                path: "/", element: <Home />,
              },
              {
                path: "/login", element: <Login />,
              },
              {
                path: "/signup", element: <Signup />,
              },
              {
                path: "/about-us", element: <About />,
              },
              {
                path: "/blog", element: <Blog />,
              },
            ],
          },



          {
            path: "/dashboard", element: <Dashboard />,
            children: [
              {
                path: "/dashboard", element: <WelcomeDashboard />,
              },
            ]
          },








          {
            path: "*",
            element: <div>Error 404 page</div>,
          }










]);

export default router;
