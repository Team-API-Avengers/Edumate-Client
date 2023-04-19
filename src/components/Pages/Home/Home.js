import React, { useContext } from "react";
// import Banner from "./Banner/Banner";
import SubjectWiseTeachers from "../SubjectWiseTeacher/SubjectWiseTeachers";
import Testimonial from "./Testimonial/Testimonial";
import AboutOurs from "./AboutOurs/AboutOurs";
import ContactUs from "../Contact/ContactUs";
import Reviews from "../Reviews/Reviews";
import BeATeacher from "./BecomeATutor/BeATeacher";
// import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";
import Loader from "../../Shared/Loader/Loader";
// import { BsArrowUpSquare, BsBookmarks, BsBookmarksFill, BsFileArrowUp, BsFileArrowUpFill, BsFillArrowUpSquareFill, BsFillTagFill, BsFillTagsFill,} from "react-icons/bs";
import { AuthContext } from "../../Context/AuthProvider";
import SearchBox from "./SearchBox/SearchBox";
import ScrollButton from "./ScrollButton/ScrollButton";
import Hero from "./Hero/Hero";
import Sponsors from "./Sponsors/Sponsors";

const Home = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
       
     {/* <div className="hidden lg:block fixed right-10 z-50">
        <a className="py-2 text-blue-700 dark:text-white group" href="#top">
          <BsFillArrowUpSquareFill className="group-hover:hidden ml-2 mb-2 flex" />
          <BsArrowUpSquare className="group-hover:flex ml-2 mb-2 hidden" />
        </a>

       
        <div className="bg-blue-700  dark:bg-white  dark:text-black text-white shadow-xl shadow-blue-400 py-8 px-2 rounded-full">
          <a title="Give Review" className="py-2 group flex" href="#review">
            <AiOutlineEdit className="group-hover:hidden flex" />
            <AiFillEdit className="group-hover:flex hidden" />
           
          </a>

          <a
            title="Be a teacher"
            className="py-2 group flex"
            href="#beATeacher"
          >
            <BsFillTagFill className="group-hover:hidden flex" />
            <BsFillTagsFill className="group-hover:flex hidden" />
          </a>

          <a
            title="Contact with us"
            className="py-2 group flex"
            href="#contact"
          >
            <BsBookmarks className="group-hover:hidden flex" />
            <BsBookmarksFill className="group-hover:flex hidden" />
          </a>
        </div>
      </div> */}

      {/* <Banner /> */}
         <Hero />
      <div id="search">
      <SearchBox />
      </div>

      <SubjectWiseTeachers />

    

      {
        user?.uid &&
        <div id="review">
        <Reviews />
      </div>
      }

      <Testimonial />

      <div id="beATeacher">
        <BeATeacher />
      </div>

     {/*  */}
      <AboutOurs />

      <Sponsors width="100%" behavior="scroll" bgcolor="pink" />

      {
        user?.uid &&
        <div className="mb-5" id="contact">
        <ContactUs />
      </div>
      }


      <ScrollButton />

    </div>
  );
};

export default Home;
