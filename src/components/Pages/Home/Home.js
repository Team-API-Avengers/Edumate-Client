import React from "react";
import Banner from "./Banner/Banner";
import SubjectWiseTeachers from "../SubjectWiseTeacher/SubjectWiseTeachers";
import OurBestTeachers from "./OurBestTeachers/OurBestTeachers";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <Banner />
      <SubjectWiseTeachers />
      <OurBestTeachers />
      <Testimonial />
    </div>
  );
};

export default Home;
