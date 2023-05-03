import React from "react";
import CountUp from "react-countup";

const AboutOurs = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="text-center md:border-r border-b md:border-b-0 border-green-400">
            <h6 className="text-4xl  font-bold lg:text-5xl xl:text-6xl">
              <CountUp start={0} end={100} duration={30} delay={30}></CountUp>
            </h6>
            <p className="text-sm font-bold tracking-widest text-green-600 uppercase lg:text-base">
              Teachers
            </p>
            <p className="m-3 text-start">
              Building a community of educators to share knowledge and support.
            </p>
          </div>
          <div className="text-center md:border-r border-b md:border-b-0 border-green-400">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp start={0} end={355} duration={30} delay={30}></CountUp>
            </h6>
            <p className="text-sm font-bold tracking-widest text-green-600 uppercase lg:text-base">
              Students
            </p>
            <p className="m-3 text-start">
              Building a future where every student has access to quality
              education.
            </p>
          </div>
          <div className="text-center md:border-r border-b md:border-b-0 border-green-400">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp start={0} end={1000} duration={30} delay={30}></CountUp>+
            </h6>
            <p className="text-sm font-bold tracking-widest text-green-600 uppercase lg:text-base">
              Users
            </p>
            <p className="m-3 text-start">
              Uniting a community of learners and educators to achieve academic
              excellence.
            </p>
          </div>
          <div className="text-center  border-b md:border-b-0 border-green-400">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp start={0} end={57} duration={30} delay={30}></CountUp>
            </h6>
            <p className="text-sm font-bold tracking-widest text-green-600 uppercase lg:text-base">
              Top rated teacher
            </p>
            <p className="m-3 text-start">
              Exceptional educators, inspiring excellence in every student and
              change the face of education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurs;
