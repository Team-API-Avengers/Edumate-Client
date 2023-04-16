import { useState, useEffect, useContext } from "react";
import { Navbar, MobileNav, Typography,Button,IconButton} from "@material-tailwind/react";
import logo from "../../Assets/logo.png";
import darkLogo from "../../Assets/dark-Logo.png";
import { AuthContext } from "../../Context/AuthProvider";
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
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
//   const navList = (
//     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Pages
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Account
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Blocks
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Docs
//         </a>
//       </Typography>
//     </ul>
//   );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl dark:bg-[#350573] dark:text-white dark:border-0 py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 dark:bg-[#350573] dark:text-white">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to={"/"}>
            <span className="text-4xl font-bold">
              {theme === "dark" ? (
                <img className="w-16" src={darkLogo} alt="darkLogo" />
              ) : (
                <img className="w-16" src={logo} alt="logo" />
              )}
            </span>
          </Link>
        </Typography>
        {/* <div className="hidden lg:block">{navList}</div> */}
        {/* <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <span>Buy Now</span>
        </Button> */}
        <label className="swap hidden  lg:inline-flex swap-rotate mt-2">
              <input onClick={handleThemeSwitch} className="hidden" type="checkbox" />
              <BsSunFill className="swap-on fill-current  text-white text-4xl " />
              <BsMoonFill className="swap-off fill-current -ml-7 text-yellow-500  text-4xl" />
            </label>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {/* {navList} */}
          {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button> */}
          <label className="swap hidden  lg:inline-flex swap-rotate mt-2">
              <input onClick={handleThemeSwitch} className="hidden" type="checkbox" />
              <BsSunFill className="swap-on fill-current  text-white text-4xl " />
              <BsMoonFill className="swap-off fill-current -ml-7 text-yellow-500  text-4xl" />
            </label>
        </div>
      </MobileNav>
    </Navbar>
  );
}
export default AuthenticationHeader;