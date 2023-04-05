import React from "react";
import SubjectWiseTeacher from "./SubjectWiseTeacher";
import { Link } from "react-router-dom";

const SubjectWiseTeachers = () => {
  const teachers = [
    {
      name: "Jennifer Lee",
      email: "jennifer.lee@example.com",
      background: "Science",
      number: "555-1234",
      location: "San Francisco",
      experience: 5,
    },
    {
      name: "David Kim",
      email: "david.kim@example.com",
      background: "Commerce",
      number: "555-5678",
      location: "New York",
      experience: 3,
    },
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      background: "Humanity",
      number: "555-9101",
      location: "Los Angeles",
      experience: 1,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">Teachers by background</h1>
      <div className="grid grid-cols-4 gap-2 max-w-screen-xl mt-10 mb-10 mx-auto">
        <div class="container  px-5 py-1  mx-auto">
          <Link to={"/all-Teachers"}>
            <div class="block rounded-lg border border-gray-500 p-4  shadow-xl hover:border-blue-500 transition transform hover:scale-90">
              <h2 class="mt-2 text-xl font-bold">All</h2>

              <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                10 teachers available
              </p>
            </div>
          </Link>
        </div>

        {teachers.map((teacher, i) => (
          <SubjectWiseTeacher key={i} teacher={teacher}></SubjectWiseTeacher>
        ))}
      </div>
    </div>
  );
};

export default SubjectWiseTeachers;
