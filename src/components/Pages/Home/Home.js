import React, { useContext } from "react";
import SubjectWiseTeachers from "../SubjectWiseTeacher/SubjectWiseTeachers";
import AboutOurs from "./AboutOurs/AboutOurs";
import ContactUs from "../Contact/ContactUs";
import Reviews from "../Reviews/Reviews";
import BeATeacher from "./BecomeATutor/BeATeacher";
import Loader from "../../Shared/Loader/Loader";
import { AuthContext } from "../../Context/AuthProvider";
import ScrollButton from "./ScrollButton/ScrollButton";
import Hero from "./Hero/Hero";
import Sponsors from "./Sponsors/Sponsors";
import GetReview from "./GetReview/GetReview";
import Gallery from "./Gallery/Gallery";
import FAQ from "../FAQ/FAQ";
import SearchQuery from "./SearchQuery/SearchQuery";


const Home = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }




  return (
    <div>

      <Hero />

       <div id="search"><SearchQuery /></div>

      <SubjectWiseTeachers />

      {user?.uid && <div id="review"><Reviews /></div>}

      <GetReview />

      <div id="beATeacher"> <BeATeacher /></div>

      <Gallery />

      <AboutOurs />

      <div id="faq"><FAQ /></div>

      <div className="my-5"><Sponsors /></div>

      { user?.uid &&<div id="contact"><ContactUs /></div>}
      
      <ScrollButton />

    </div>
  );
};

export default Home;
