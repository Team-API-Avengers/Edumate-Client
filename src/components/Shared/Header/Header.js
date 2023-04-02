import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import FormModal from "../FormModal/FormModal";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { BsChevronUp } from "react-icons/bs";
import { color } from "style-value-types";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  const navList = (
    <ul className="mb-4 font-bold mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink style={navStyle} to={"/"} className="flex items-center">
        Home
      </NavLink>

      <NavLink style={navStyle} to={"/blog"} className="flex items-center">
        Blog
      </NavLink>

      <NavLink style={navStyle} to={"/about"} className="flex items-center">
        About
      </NavLink>

      <NavLink style={navStyle} to={"/dashboard"} className="flex items-center">
        Dashboard
      </NavLink>
      <NavLink to={"/profile"} className="flex lg:hidden items-center">
        Profile
      </NavLink>
      <NavLink to={"/signOut"} className="flex lg:hidden items-center">
        Sign Out
      </NavLink>
      <NavLink to={"/login"} className="flex lg:hidden items-center">
        Sign In
      </NavLink>
      <NavLink to={"/signUp"} className="flex lg:hidden  items-center">
        Sign Up
      </NavLink>
    </ul>
  );

  return (
    <div>
      {/* <Navbar className="sticky bg-slate-200 text-black inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Edumate
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <div className="avatar online">
                  <div className="w-12 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png" />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link to="/">Settings</Link>
                </li>
                <li>
                  <a>Logout</a>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Navbar> */}{" "}
      <Navbar className="mx-auto shadow-lg max-w-screen-2xl bg-black py-6 px-4 rounded-none lg:px-8 lg:py-6">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}>
            <span className="text-4xl font-bold">Edumate</span>
          </Link>

          <div className="hidden lg:block">{navList}</div>

          <div className="dropdown dropdown-end hidden lg:block">
            <label tabIndex={0} className="cursor-pointer">
              <div className="avatar online">
                <div className="w-12 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png" />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 text-black font-bold shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <Link to="/">Settings</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
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
