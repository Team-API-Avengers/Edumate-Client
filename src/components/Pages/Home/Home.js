import React from "react";
import Banner from "./Banner/Banner";
import SubjectWiseTeachers from "../SubjectWiseTeacher/SubjectWiseTeachers";
import OurBestTeachers from "./OurBestTeachers/OurBestTeachers";

const Home = () => {
  return (
    <div>
      <Banner />
      <SubjectWiseTeachers />
      <OurBestTeachers />
    </div>
  );
};

export default Home;
