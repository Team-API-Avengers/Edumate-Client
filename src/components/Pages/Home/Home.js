import React from "react";
import Banner from "./Banner/Banner";
import SubjectWiseTeachers from "../SubjectWiseTeacher/SubjectWiseTeachers";
// import OurBestTeachers from "./OurBestTeachers/OurBestTeachers";
import Testimonial from "./Testimonial/Testimonial";
import OurEnvironment from "./OurEnvironment/OurEnvironment";
// import Contact from "../Contact/Contact";
import AboutOurs from "./AboutOurs/AboutOurs";
import ContactUs from "../Contact/ContactUs";
import Reviews from "../Reviews/Reviews";
import BeATeacher from "./BecomeATutor/BeATeacher";
// import OurBestTeacher from "./OurBestTeachers/OurBestTeacher";

const Home = () => {
  return (
    <div className="relative">
       {/* <div className='hidden bg-slate-200 py-8 px-2 rounded-full lg:block fixed right-10 z-50'>
       <p className="py-2">Go Top</p>
       <a className="py-2" href="#review">Review</a>
       <p className="py-2">More</p>
      </div> */}
      <Banner />
      <SubjectWiseTeachers />

      <OurEnvironment />
      <div id="review">
        <Reviews />
      </div>

      <Testimonial />
      <AboutOurs />

      <BeATeacher />
      <ContactUs />
    </div>
  );
};

export default Home;
