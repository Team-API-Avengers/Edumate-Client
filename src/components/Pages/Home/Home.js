import React from "react";
import Banner from "./Banner/Banner";
import SubjectWiseTeachers from "../SubjectWiseTeacher/SubjectWiseTeachers";
import OurBestTeachers from "./OurBestTeachers/OurBestTeachers";
import Testimonial from "./Testimonial/Testimonial";
import OurEnvironment from "./OurEnvironment/OurEnvironment";


const Home = () => {
  return (
    <div>
      <Banner />
      <SubjectWiseTeachers />
      <OurEnvironment />
      <OurBestTeachers />
      <Testimonial />
    </div>
  );
};

export default Home;
