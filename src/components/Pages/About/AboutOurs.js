import React from "react";
import CountUp from "react-countup";

const AboutOurs = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 id="title" className="text-4xl  font-bold text-[#1AA3D0] dark:text[#1AA3D0]">
          Our Strength And Power
        </h1>
        <div className="grid mt-10 grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="text-center md:border-r border-b md:border-b-0 border-green-400">
            <h6 className="text-4xl  font-bold lg:text-5xl dark:text-[#fff] xl:text-6xl">
              <CountUp start={0} end={100} duration={10} delay={30}></CountUp>
            </h6>
            <p className="text-sm dark:text-[#00A99D] font-bold tracking-widest text-[#00A99D] uppercase lg:text-base">
              Teachers
            </p>
            <p className="m-3 text-start dark:text-[#fff]">
              Building a community of educators to share knowledge and support.
            </p>
          </div>
          <div className="text-center md:border-r border-b md:border-b-0 border-green-400">
            <h6 className="text-4xl font-bold lg:text-5xl dark:text-[#fff] xl:text-6xl">
              <CountUp start={0} end={355} duration={10} delay={30}></CountUp>
            </h6>
            <p className="text-sm dark:text-[#00A99D] font-bold tracking-widest text-[#00A99D] uppercase lg:text-base">
              Students
            </p>
            <p className="m-3 text-start dark:text-[#fff]">
              Building a future where every student has access to quality education.
            </p>
          </div>
          <div className="text-center md:border-r border-b md:border-b-0 border-green-400">
            <h6 className="text-4xl font-bold lg:text-5xl dark:text-[#fff] xl:text-6xl">
              <CountUp start={0} end={1000} duration={10} delay={30}></CountUp>+
            </h6>
            <p className="text-sm dark:text-[#00A99D] font-bold tracking-widest text-[#00A99D] uppercase lg:text-base">
              Users
            </p>
            <p className="m-3 text-start dark:text-[#fff]">
              Uniting a community of learners and educators to achieve academic excellence.
            </p>
          </div>
          <div className="text-center  border-b md:border-b-0 border-green-400">
            <h6 className="text-4xl font-bold lg:text-5xl dark:text-[#fff] xl:text-6xl">
              <CountUp start={0} end={57} duration={10} delay={30}></CountUp>
            </h6>
            <p className="text-sm dark:text-[#00A99D] font-bold tracking-widest text-[#00A99D] uppercase lg:text-base">
              Top rated teacher
            </p>
            <p className="m-3 text-start dark:text-[#fff]">
              Exceptional educators, inspiring excellence in every student and change the face of education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurs;
