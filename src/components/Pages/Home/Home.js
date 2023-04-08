import React from "react";
import Banner from "./Banner/Banner";
import SubjectWiseTeachers from "../SubjectWiseTeacher/SubjectWiseTeachers";
import Testimonial from "./Testimonial/Testimonial";
import AboutOurs from "./AboutOurs/AboutOurs";
import ContactUs from "../Contact/ContactUs";
import Reviews from "../Reviews/Reviews";
import BeATeacher from "./BecomeATutor/BeATeacher";
import Testimonials from "./Testimonial/Testimonials/Testimonials";
import { AiFillEdit, AiOutlineEdit} from 'react-icons/ai';
import { BsBookmarks, BsBookmarksFill, BsFileArrowUp, BsFileArrowUpFill, BsFillTagFill, BsFillTagsFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="relative">

        <div className='hidden lg:block fixed right-10 z-50'>

       <a className="py-2 text-blue-700 group" href="#top">
        <BsFileArrowUp className='group-hover:hidden ml-2 mb-2 flex' />
        <BsFileArrowUpFill className='group-hover:flex ml-2 mb-2 hidden' />
        </a>


       <div className="bg-blue-700 text-white shadow-xl shadow-blue-400 py-8 px-2 rounded-full">
       <a title="Give Review" className="py-2 group flex" href="#review">
        <AiOutlineEdit className='group-hover:hidden flex' />
        <AiFillEdit className='group-hover:flex hidden' />
        {/* Review */}
        </a>
        
       <a title="Be a teacher" className="py-2 group flex" href="#beATeacher">
        <BsFillTagFill className='group-hover:hidden flex' />
        <BsFillTagsFill className='group-hover:flex hidden' />
        {/* Review */}
        </a>

       <a title="Contact with us" className="py-2 group flex" href="#contact">
        <BsBookmarks className='group-hover:hidden flex' />
        <BsBookmarksFill className='group-hover:flex hidden' />
        {/* Review */}
        </a>
       </div>

       
      </div> 

      <Banner />
      <SubjectWiseTeachers />

      <div id="review">
        <Reviews />
      </div>

      <Testimonial />
      <AboutOurs />
      <Testimonials />
      <div id='beATeacher'>
      <BeATeacher />
      </div>
      <div id='contact'>
      <ContactUs />
      </div>

    </div>
  );
};

export default Home;
