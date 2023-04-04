import React from "react";
import Banner from "./Banner/Banner";
import SubjectWiseTeachers from "../SubjectWiseTeacher/SubjectWiseTeachers";
// import OurBestTeachers from "./OurBestTeachers/OurBestTeachers";
import Testimonial from "./Testimonial/Testimonial";
import OurEnvironment from "./OurEnvironment/OurEnvironment";
import Contact from "../Contact/Contact";
import AboutOurs from "../About/AboutOurs";
import ContactUs from "../Contact/ContactUs";
// import OurBestTeacher from "./OurBestTeachers/OurBestTeacher";

const Home = () => {
  return (
    <div>
      <Banner />
      <SubjectWiseTeachers />
      <OurEnvironment />
      {/* <OurBestTeachers /> */}

      <Testimonial />
      <AboutOurs />
      {/* <Contact /> */}
      <ContactUs />
    </div>
  );
};

export default Home;
