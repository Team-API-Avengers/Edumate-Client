import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const SubjectWiseTeacher = () => {
  const [backgrounds, setBackground] = useState([]);
  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`).then((res) =>
      res.json().then((data) => setBackground(data?.data))
    );
  }, []);
  // console.log(backgrounds);
  return (
    <div>
      {backgrounds?.map((category) => (
        <section class="text-gray-600 body-font">
          <div class="container  px-5 py-1  mx-auto">
            <Link to={`/${category?.background}`}>
              <div class="block rounded-lg border border-gray-500 p-4 h-28 shadow-xl hover:border-blue-500 transition transform hover:scale-90">
                <h2 class="mt-2 text-xl font-bold">{category?.background}</h2>

                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">10 teachers available</p>
                <div>
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SubjectWiseTeacher;
