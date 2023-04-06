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
import BlogDetails from "../Blog/BlogDetails";
import AddBlog from "../Blog/AddBlog";
// import OurBestTeacher from "./OurBestTeachers/OurBestTeacher";

const Home = () => {
  return (
    <div>
      <Banner />
      <SubjectWiseTeachers />
      {/* <BlogDetails /> */}
      <AddBlog />
      <OurEnvironment />
      {/* <OurBestTeachers /> */}

      <Reviews />

      <Testimonial />
      <AboutOurs />
      {/* <Contact /> */}
      <BeATeacher />
      <ContactUs />
    </div>
  );
};

export default Home;
