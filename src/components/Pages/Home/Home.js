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

const Home = () => {
  return (
    <div>
      <Banner />
      <SubjectWiseTeachers />

      <OurEnvironment />

      <Reviews />

      <Testimonial />
      <AboutOurs />

      <BeATeacher />
      <ContactUs />
    </div>
  );
};

export default Home;
