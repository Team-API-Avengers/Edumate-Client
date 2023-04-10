import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FormModal from "../FormModal/FormModal";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { BsChevronUp } from "react-icons/bs";
import { color } from "style-value-types";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import logo from "../../Assets/logo.png";

const Header = () => {
  const { user, logOut, logUser } = useContext(AuthContext);
  // const [logUser, setLogUser] = useState();

  // useEffect(() => {
  // 	fetch(`https://edumate-second-server.vercel.app/api/v1/user/useremail/${user?.email}`)
  // 		.then((res) => res.json())
  // 		.then((result) => {
  // 			console.log(result);
  // 			if(result != undefined){
  // 				setLogUser(result.data);
  // 			}
  // 		});
  // }, [user?.email]);

  // console.log('logUser', logUser?.email);

  console.log("header logUser", logUser);

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
    <ul className="mb-4 font-bold mt-2 flex flex-col text-black  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
      <NavLink
        style={navStyle}
        to={"/"}
        className="flex  w-24 justify-center items-center"
      >
        Home
      </NavLink>
      {logUser?.role === "Teacher" ? 
        <NavLink>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Blog
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/addBlog"}>Add Blog</Link>
              </li>
            </ul>
          </div>
        </NavLink>
        :
        <NavLink
          style={navStyle}
          to={"/blog"}
          className="flex w-24 justify-center items-center"
        >
          Blog
        </NavLink>
      }
      {/* {logUser?.role === "Student" && (
        <NavLink
          style={navStyle}
          to={"/blog"}
          className="flex w-24 justify-center items-center"
        >
          Blog
        </NavLink>
      )} */}

      <NavLink
        style={navStyle}
        to={"/dashboard"}
        className="flex  w-36 justify-center items-center"
      >
        Dashboard
      </NavLink>

      <NavLink
        style={navStyle}
        // to={"/dashboard/contact"}
        to={"/contact"}
        className="flex  w-24 justify-center items-center"
      >
        Contact
      </NavLink>

      <NavLink
        style={navStyle}
        to={"/about-us"}
        className="flex  w-24 justify-center items-center"
      >
        About
      </NavLink>

      <NavLink to={"/profile"} className="flex lg:hidden items-center">
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
      <Navbar className="mx-auto shadow-lg max-w-screen-2xl  py-6 px-4 rounded-none lg:px-8 lg:py-3">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}>
            <span className="text-4xl font-bold">
              <img className="w-32" src={logo} alt="logo" />
            </span>
          </Link>

          <div className="hidden lg:block">{navList}</div>

          <div className="dropdown dropdown-end hidden lg:block">
            <label tabIndex={0} className="cursor-pointer">
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
              className="mt-3 p-2 text-black font-bold shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
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
                    <Link to="/">Settings</Link>
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
                </>
              )}
            </ul>
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
