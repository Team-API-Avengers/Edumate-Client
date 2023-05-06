import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      { backgrounds?.map((category, idx) => (
        <section key={ idx } className="text-gray-600 body-font">
          <div className="container  px-5 py-1  mx-auto">
            <Link to={ `/${ category?.background }` }>
              <div className="block rounded-lg border border-gray-500 p-4 h-28 shadow-xl hover:border-blue-500 transition transform hover:scale-90">
                <h2 className="mt-2 text-xl font-bold">{ category?.background }</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">10 teachers available</p>
                <div>
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )) }
    </div>
  );
};

export default SubjectWiseTeacher;
