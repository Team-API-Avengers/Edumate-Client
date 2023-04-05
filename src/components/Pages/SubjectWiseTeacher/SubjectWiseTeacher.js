import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SubjectWiseTeacher = ({ teacher }) => {
  // console.log(teacher);
  const teachers = useLoaderData();

  return (
    <div>
      {teachers?.map((teacher) => (
        <section class="text-gray-600 body-font">
          <div class="container  px-5 py-1  mx-auto">
            <Link to={`/background/${teacher?.background}`}>
              <div class="block rounded-lg border border-gray-500 p-4  shadow-xl hover:border-blue-500 transition transform hover:scale-90">
                <h2 class="mt-2 text-xl font-bold">{teacher?.background}</h2>

                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  10 teachers available
                </p>
              </div>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SubjectWiseTeacher;
