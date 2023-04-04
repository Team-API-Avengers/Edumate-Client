import React from "react";
import { Link } from "react-router-dom";

const SubjectWiseTeacher = ({ teacher }) => {
  console.log(teacher);
  const { background } = teacher;
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container  px-5 py-1  mx-auto">
          <Link to={`/background/${background}`}>
            <div class="block rounded-lg border border-gray-500 p-4 shadow-xl hover:border-blue-500 transition transform hover:scale-90">
              <h2 class="mt-2 text-xl font-bold">{background}</h2>

              <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600"></p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SubjectWiseTeacher;
