import React from "react";
import CountUp from "react-countup";

const AboutOurs = () => {
  return (
    <div>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div class="text-center md:border-r border-b md:border-b-0 border-black">
            <h6 class="text-4xl  font-bold lg:text-5xl xl:text-6xl">
              <CountUp start={0} end={100} duration={10}></CountUp>
            </h6>
            <p class="text-sm font-bold tracking-widest text-blue-600 uppercase lg:text-base">Teachers</p>
            <p className="m-3">Building a community of educators to share knowledge and support.</p>
          </div>
          <div class="text-center md:border-r border-b md:border-b-0 border-black">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {" "}
              <CountUp start={0} end={355} duration={10}></CountUp>
            </h6>
            <p class="text-sm font-bold tracking-widest text-blue-600 uppercase lg:text-base">Students</p>{" "}
            <p className="m-3">Building a future where every student has access to quality education.</p>
          </div>
          <div class="text-center md:border-r border-b md:border-b-0 border-black">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {" "}
              <CountUp start={0} end={1000} duration={10}></CountUp>+
            </h6>
            <p class="text-sm font-bold tracking-widest text-blue-600 uppercase lg:text-base">Users</p>{" "}
            <p className="m-3">Uniting a community of learners and educators to achieve academic excellence.</p>
          </div>
          <div class="text-center md:border-r border-b md:border-b-0 border-black">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp start={0} end={57} duration={10}></CountUp>
            </h6>
            <p class="text-sm font-bold tracking-widest text-blue-600 uppercase lg:text-base">Top rated teacher</p>{" "}
            <p className="m-3">
              Exceptional educators, inspiring excellence in every student and change the face of education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurs;
