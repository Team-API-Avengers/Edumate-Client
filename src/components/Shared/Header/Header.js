import React, { useContext } from "react";
import { Navbar, MobileNav } from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { BsChevronUp, BsMoonFill, BsSunFill } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

import logo from "../../Assets/logo.png";
import darkLogo from "../../Assets/dark-Logo.png";

const Header = () => {
  const { user, logOut, logUser, theme, setTheme } = useContext(AuthContext);

  console.log("header logUser role", logUser);

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
    <ul className="mb-4 font-bold mt-2 flex flex-col text-black  dark:text-white lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavLink
        style={navStyle}
        to={"/"}
        className="flex   justify-center items-center"
      >
        Home
      </NavLink>
      {/* {logUser?.role === "Teacher" ? ( */}
      <NavLink>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className=" flex   justify-center items-center rounded-btn"
          >
            Blog
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content hover:bg-none dark:bg-[#350573]  dark:text-white p-2 shadow bg-base-100 rounded-box w-52 border border-black dark:border-white  mt-4"
          >
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/addBlog"}>Add Blog</NavLink>
            </li>
          </ul>
        </div>
      </NavLink>
      {/*) : (
        <NavLink to={"/blog"} className="flex  justify-center items-center">
          Blog
        </NavLink>
      )} */}

      <NavLink
        style={navStyle}
        to={"/dashboard"}
        className="flex  justify-center items-center"
      >
        Dashboard
      </NavLink>

      <NavLink
        style={navStyle}
        // to={"/dashboard/contact"}
        to={"/contact"}
        className="flex justify-center items-center"
      >
        Contact
      </NavLink>

      <NavLink
        style={navStyle}
        to={"/about-us"}
        className="flex justify-center items-center"
      >
        About
      </NavLink>

      {/* Profile Items */}

      <NavLink
        to={"/profile"}
        className="flex lg:hidden  dark:bg-[#350573]  dark:text-white items-center"
      >
        Profile
      </NavLink>
      {user ? (
        <a onClick={handleLogOut} className="flex lg:hidden items-center">
          Sign Out
        </a>
      ) : (
        <>
          <NavLink to={"/login"} className="flex lg:hidden items-center">
            Sign In
          </NavLink>
          <NavLink to={"/signUp"} className="flex lg:hidden  items-center">
            Sign Up
          </NavLink>
        </>
      )}
    </ul>
  );

  return (
    <div>
      <Navbar className="mx-auto dark:bg-[#350573] dark:text-white shadow-lg dark:border-0 max-w-screen-2xl py-6 px-4 rounded-none lg:px-8 lg:py-3">
        <div className="container mx-auto flex px-10 items-center max-w-screen-xl justify-between text-blue-gray-900">
          <Link to={"/"}>
            <span className="text-4xl font-bold">
              {theme === "dark" ? (
                <img className="w-32" src={darkLogo} alt="darkLogo" />
              ) : (
                <img className="w-32" src={logo} alt="logo" />
              )}
            </span>
          </Link>

          <div className="hidden lg:block">{navList}</div>

          <div className="flex gap-5">
            <div className="dropdown dropdown-end  hidden lg:block">
              <label tabIndex={0} className="mr-5 cursor-pointer">
                <div className="avatar online">
                  <div className="w-12 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
                    {user ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <img src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png" />
                    )}
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 text-black dark:bg-[#862aff]  dark:text-white font-bold shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                {user ? (
                  <>
                    <li>
                      <Link
                        to="/dashboard/My-Profile"
                        className="justify-between"
                      >
                        {user?.displayName}
                      </Link>
                    </li>
                    <li>
                      <Link to="/settings">Settings</Link>
                    </li>

                    <li>
                      <a onClick={handleLogOut}>Logout</a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">Signup</Link>
                    </li>

                    <label className="swap swap-rotate my-2">
                      <input onClick={handleThemeSwitch} type="checkbox" />
                      <BsSunFill className="swap-on fill-current w-5 h-5" />
                      <BsMoonFill className="swap-off fill-current w-5 h-5" />
                    </label>
                  </>
                )}
              </ul>{" "}
            </div>
            <label className="swap  swap-rotate my-2">
              <input onClick={handleThemeSwitch} type="checkbox" />
              <BsSunFill className="swap-on fill-current -mt-2 text-white text-4xl" />
              <BsMoonFill className="swap-off fill-current -mt-2  text-black text-4xl" />
            </label>
          </div>

          <button
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <BsChevronUp className="text-3xl " />
            ) : (
              <BiMenu className="text-3xl" />
            )}
          </button>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">{navList}</div>

          <div className="avatar online">
            <div className="w-12 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png" />
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
