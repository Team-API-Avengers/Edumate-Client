import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import FormModal from "../FormModal/FormModal";

const Header = () => {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/"} className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink className="flex items-center">Blog</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink className="flex items-center">About</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={'/dashboard'} className="flex items-center">
          Dashboard
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky bg-slate-200 inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
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
      </Navbar>
    </div>
  );
};

export default Header;
