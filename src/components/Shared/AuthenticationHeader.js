import { useState, useEffect, useContext } from "react";
import { Navbar, MobileNav, Typography, IconButton } from "@material-tailwind/react";
import logo from "../Assets/Logos/EDU_LOGO.png";
import darkLogo from "../Assets/Logos/EDU_Dark_Logo.png";
import { AuthContext } from "../Context/AuthProvider";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AuthenticationHeader = () => {
  const { theme, setTheme } = useContext(AuthContext);

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

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="mx-auto max-w-full bg-[#04516B] dark:bg-[#04516B] dark:text-[#bb86fc] dark:border-0 py-2 px-4 lg:px-8 lg:py-3">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 bg-transparent">
        <Typography as="a" href="#" variant="small" className="mr-4 cursor-pointer font-normal">
          <Link to={"/"}>
            <span className="text-4xl font-bold">
              {theme === "dark" ? (
                <img className="w-44" src={darkLogo} alt="darkLogo" />
              ) : (
                <img className="w-44" src={darkLogo} alt="logo" />
              )}
            </span>
          </Link>
        </Typography>

        <label className="swap hidden  lg:inline-flex swap-rotate mt-2">
          <input onClick={handleThemeSwitch} className="hidden" type="checkbox" />
          <BsSunFill className="swap-on fill-current  text-white text-4xl " />
          <BsMoonFill className="swap-off fill-current -ml-7 text-yellow-500  text-4xl" />
        </label>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <label className="swap hidden  lg:inline-flex swap-rotate mt-2">
            <input onClick={handleThemeSwitch} className="hidden" type="checkbox" />
            <BsSunFill className="swap-on fill-current  text-white text-4xl " />
            <BsMoonFill className="swap-off fill-current -ml-7 text-yellow-500  text-4xl" />
          </label>
        </div>
      </MobileNav>
    </Navbar>
  );
};
export default AuthenticationHeader;
