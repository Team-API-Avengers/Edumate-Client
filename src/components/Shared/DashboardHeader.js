import { MobileNav, Navbar } from "@material-tailwind/react";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import {
  BsChevronUp,
  BsFillCaretRightFill,
  BsMoonFill,
  BsSunFill,
} from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import logo from "../Assets/Logos/EDU_LOGO.png";
import darkLogo from "../Assets/Logos/EDU_Dark_Logo.png";

const DashboardHeader = () => {
  const { user, logOut, theme, setTheme } = useContext(AuthContext);

  // console.log("header logUser role", logUser);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
    logOut()
      .then(() => {
        toast.error("Log Out!");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navStyle = ({ isActive }) => {
    return {
      textDecoration: "none",
      padding: "5px",
      borderRadius: "2px",
      borderBottom: isActive ? "3px solid blue" : "none",
    };
  };

  const navList = (
    <ul className="mb-4 font-bold mt-2 flex flex-col text-black dark:bg-black dark:text-[#bb86fc] lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavLink
        style={ navStyle }
        to={ "/" }
        className="flex   justify-center items-center"
      >
        Home
      </NavLink>

      <NavLink>
        <>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={ 0 }
              className=" flex   justify-center items-center rounded-btn"
            >
              Blog
            </label>
            <ul
              tabIndex={ 0 }
              className="menu dropdown-content hover:bg-none dark:bg-black dark:text-[#bb86fc] p-2 shadow bg-base-100 rounded-box w-52 border border-black dark:border-white  mt-4"
            >
              <li>
                <NavLink to={ "/blog" }>Blog</NavLink>
              </li>
              <li>
                <NavLink to={ "/addBlog" }>Add Blog</NavLink>
              </li>
            </ul>
          </div>
        </>
      </NavLink>

      <NavLink
        style={ navStyle }
        to={ "/dashboard" }
        className="flex  justify-center items-center"
      >
        Dashboard
      </NavLink>

      <NavLink
        style={ navStyle }
        to={ "/contact" }
        className="flex justify-center items-center"
      >
        Contact
      </NavLink>

      <NavLink
        style={ navStyle }
        to={ "/about-us" }
        className="flex justify-center items-center"
      >
        About
      </NavLink>

      {/* Profile Items */ }

      <NavLink
        to={ "/profile" }
        className="flex lg:hidden justify-center items-center dark:bg-black dark:text-[#bb86fc]"
      >
        Profile
      </NavLink>
      { user ? (
        <a
          href="/"
          onClick={ handleLogOut }
          className="flex lg:hidden justify-center items-center"
        >
          Sign Out
        </a>
      ) : (
        <>
          <NavLink
            to={ "/login" }
            className="flex lg:hidden justify-center mt-2  items-center"
          >
            Sign In
          </NavLink>
          <NavLink
            to={ "/signUp" }
            className="flex lg:hidden justify-center mt-2   items-center"
          >
            Sign Up
          </NavLink>
        </>
      ) }
    </ul>
  );

  return (
    <div>
      <Navbar className="mx-auto dark:bg-black dark:text-[#bb86fc] shadow-lg dark:border-0 max-w-screen-2xl py-6 px-4 rounded-none lg:px-8 lg:py-3">
        <div className="container  grid grid-cols-3 items-center max-w-screen-xl  text-blue-gray-900">
          {/* Drawer */ }
          <div className="flex">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-button col-span-1"
            >
              <BsFillCaretRightFill className=" text-[#350573] text-4xl dark:text-[#bb86fc]" />
            </label>
          </div>

          {/* Logo */ }
          <Link className=" col-span-1" to={ "/" }>
            <span className="text-4xl font-bold">
              { theme === "dark" ? (
                <img className="w-28 lg:w-32" src={ darkLogo } alt="darkLogo" />
              ) : (
                <img className="w-28 lg:w-32" src={ logo } alt="logo" />
              ) }
            </span>
          </Link>

          {/* Menu Button */ }
          <button
            variant="text"
            className="ml-auto col-span-1 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"

            onClick={ () => setOpenNav(!openNav) }
          >
            { openNav ? (
              <BsChevronUp className="text-3xl text-black dark:text-[#bb86fc]" />
            ) : (
              <BiMenu className="text-3xl text-black  dark:text-[#bb86fc]" />
            ) }
          </button>
        </div>

        <MobileNav open={ openNav }>
          <div>{ navList }</div>

          <div className="flex">
            <label className="swap swap-rotate mr-5 my-2">
              <input
                onClick={ handleThemeSwitch }
                className="hidden"
                type="checkbox"
              />
              <BsSunFill className="swap-on fill-current  text-white text-4xl" />
              <BsMoonFill className="swap-off fill-current  text-yellow-500 text-4xl" />
            </label>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default DashboardHeader;
