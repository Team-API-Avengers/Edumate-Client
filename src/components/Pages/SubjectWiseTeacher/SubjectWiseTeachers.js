import React from "react";
import SubjectWiseTeacher from "./SubjectWiseTeacher";

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
      <h1>Teachers by category</h1>
      <div className="grid grid-cols-3 gap-2 max-w-screen-lg mx-auto">
        {teachers.map((teacher, i) => (
          <SubjectWiseTeacher key={i} teacher={teacher}></SubjectWiseTeacher>
        ))}
      </div>
    </div>
  );
};

export default SubjectWiseTeachers;
