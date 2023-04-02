import React from "react";
import { Link } from "react-router-dom";

const SubjectWiseTeacher = ({ teacher }) => {
  const { background } = teacher;
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container border px-5 py-1 rounded-lg mx-auto">
          <Link to={`/background/${background}`}>
            <div class="flex flex-col items-center justify-center text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                {background}
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                5 teachers available
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SubjectWiseTeacher;
