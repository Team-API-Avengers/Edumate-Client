import React from "react";
// import LoaderAnimation from "../Assets/Animation/LoaderAnimation.json";
// import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center">
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="loader">Loading</div>
      </div>
      {/* <Lottie animationData={LoaderAnimation} loop={true}></Lottie> */}
    </div>
  );
};

export default Loader;
