import React from "react";

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
      {/* <div class="spinner"></div> */}
    </div>
  );
};

export default Loader;
