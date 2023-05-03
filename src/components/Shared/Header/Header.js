import React, { useContext } from "react";
import { Navbar, MobileNav } from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { BsChevronUp, BsMoonFill, BsSunFill } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

// import logo from "../../Assets/logo.png";
// import darkLogo from "../../Assets/dark-Logo.png";
import logo from "../../Assets/Logos/EDU_LOGO.png";
import darkLogo from "../../Assets/Logos/EDU_Dark_Logo.png";

const Header = () => {
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
    navigate("/authentication/login");
    logOut()
      .then(() => {
        toast.error("Log Out!");
        navigate("/authentication/login");
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

      <NavLink>
        <>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className=" flex   justify-center items-center rounded-btn"
            >
              Blog
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content hover:bg-none dark:bg-gradient-to-r from-[#1e2f37] via-[#15803d] to-[#1e2f37] dark:text-white p-2 shadow bg-base-100 rounded-box w-52 border border-black dark:border-0  mt-4"
            >
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/addBlog"}>Add Blog</NavLink>
              </li>
            </ul>
          </div>
        </>
      </NavLink>
      {/* {user?.uid && ( */}
      <NavLink
        style={navStyle}
        to={"/dashboard"}
        className="flex  justify-center items-center"
      >
        Dashboard
      </NavLink>
      {/* )} */}

      <NavLink
        style={navStyle}
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
        className="flex lg:hidden justify-center items-center dark:bg-gradient-to-r from-[#1e2f37] via-[#15803d] to-[#1e2f37] dark:text-white "
      >
        Profile
      </NavLink>
      {user ? (
        <a
          href="/"
          onClick={handleLogOut}
          className="flex lg:hidden text-red-600 justify-center items-center"
        >
          Sign Out
        </a>
      ) : (
        <>
          <NavLink
            to={"/authentication/login"}
            className="flex lg:hidden justify-center mt-2  items-center"
          >
            Sign In
          </NavLink>
          <NavLink
            to={"/authentication/signup"}
            className="flex lg:hidden justify-center mt-2   items-center"
          >
            Sign Up
          </NavLink>
        </>
      )}
    </ul>
  );

  return (
    <div>
      <Navbar className="w-full dark:bg-gradient-to-r from-[#1e2f37] via-[#15803d] to-[#1e2f37] dark:text-white shadow-lg dark:border-0 max-w-screen-2xl py-6 px-4 rounded-none lg:px-8 lg:py-3">
        <div className="w-full container flex px-10 items-center max-w-screen-2xl mx-auto justify-between text-blue-gray-900">
          <Link to={"/"}>
            {theme === "dark" ? (
              <img className="w-32 lg:w-48" src={darkLogo} alt="darkLogo" />
            ) : (
              <img className="w-32 lg:w-48" src={logo} alt="logo" />
            )}
          </Link>

          <div className="hidden lg:block">{navList}</div>

          <div className="flex justify-center gap-9 items-center">
            <div className="dropdown dropdown-end  hidden lg:block">
              {/* {user?.uid && ( */}
              <label tabIndex={0} className=" cursor-pointer">
                <div className="avatar mt-3 ">
                  <div className="w-12 rounded-full ring  ">
                    {user ? (
                      <img alt="userImage" src={user?.photoURL} />
                    ) : (
                      <img
                        alt="userImage"
                        // src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png"
                        src="https://static.vecteezy.com/system/resources/previews/007/319/933/original/black-avatar-person-icons-user-profile-icon-vector.jpg"
                      />
                    )}
                  </div>
                </div>
              </label>
              {/* )} */}
              <ul
                tabIndex={0}
                className="mt-3 p-2 text-black dark:bg-gradient-to-r from-[#1e2f37] via-[#15803d] to-[#1e2f37] dark:text-white font-bold shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                {user ? (
                  <>
                    <li>
                      <Link to="/dashboard" className="justify-between">
                        {user?.displayName}
                      </Link>
                    </li>
                    <li>
                      <Link to="/settings">Settings</Link>
                    </li>

                    <li>
                      <button className="text-red-600" onClick={handleLogOut}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/authentication/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/authentication/signup">Signup</Link>
                    </li>
                  </>
                )}
              </ul>{" "}
            </div>
            <label className="swap hidden  lg:inline-flex swap-rotate mt-2">
              <input
                onClick={handleThemeSwitch}
                className="hidden"
                type="checkbox"
              />
              <BsSunFill className="swap-on fill-current text-yellow-500 text-4xl " />
              <BsMoonFill className="swap-off fill-current -ml-7 text-slate-500 text-4xl" />
            </label>
          </div>

          <button
            variant="text"
            className="  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <BsChevronUp className="text-3xl text-black dark:text-white" />
            ) : (
              <BiMenu className="text-3xl text-black  dark:text-white" />
            )}
          </button>
        </div>

        <MobileNav open={openNav}>
          <div>{navList}</div>

          <div className="flex">
            <label className="swap swap-rotate mr-5 my-2">
              <input
                onClick={handleThemeSwitch}
                className="hidden"
                type="checkbox"
              />
              <BsSunFill className="swap-on fill-current text-yellow-500 text-4xl" />
              <BsMoonFill className="swap-off fill-current text-slate-500 text-4xl" />
            </label>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
