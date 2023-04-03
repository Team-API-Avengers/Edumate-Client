import React from "react";
import OurBestTeacher from "./OurBestTeacher";

const OurBestTeachers = () => {
  const teachers = [
    {
      number: "012225545552",
      name: "Md. Abdul Karim",
      location: "Dhaka",
      experience: "5 years",
      background: "Science",
      email: "karim@example.com",
      bgColour: "bg-green-400",
      image:
        "https://img.freepik.com/free-photo/handsome-male-with-marker-looking-camera_23-2148200990.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
    },
    {
      number: "012245645655",
      name: "Mostafa Kamal",
      location: "Chittagong",
      experience: "3 years",
      background: "Commerce",
      email: "kamal@example.com",
      bgColour: "bg-blue-400",
      image:
        "https://img.freepik.com/free-photo/front-view-young-female-student-grey-coat-with-copybooks-pink-background-lessons-university-college_140725-35000.jpg?w=996&t=st=1680457859~exp=1680458459~hmac=8d3e936d294a1de7e3002c96573dc06cc35c879b84389ac2b469fa895f0786fb",
    },
    {
      number: "012245565655",
      name: "Fatema Begum",
      location: "Rajshahi",
      experience: "7 years",
      background: "Humanity",
      email: "begum@example.com",
      bgColour: "bg-yellow-400",
      image:
        "https://img.freepik.com/free-photo/responsible-student_23-2147650755.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
    },
    {
      number: "012256756655",
      name: "Md. Rohim Uddin",
      location: "Sylhet",
      experience: "4 years",
      background: "Humanity",
      email: "rohim@example.com",
      bgColour: "bg-red-400",
      image:
        "https://image.freepik.com/free-photo/portrait-happy-woman_171337-36706.jpg",
    },

    {
      number: "012225547755",
      name: "Farida Akter",
      location: "Khulna",
      experience: "6 years",
      background: "Commerce",
      email: "akter@example.com",
      bgColour: "bg-teal-400",
      image:
        "https://img.freepik.com/free-photo/business-lady-cute-young-blonde-woman-office-outfit-glasses-touching-corner-glasses_140725-161312.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
    },
    {
      number: "012225545655",
      name: "Shahada Khatun",
      location: "Mymensingh",
      experience: "8 years",
      background: "Humanity",
      email: "khatoon@example.com",
      bgColour: "bg-purple-400",
      image:
        "https://img.freepik.com/free-photo/woman-with-tablet-showing-ok-sign_23-2148435501.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
    },
    {
      number: "012225545757",
      name: "Abul Kalam",
      location: "Rangpur",
      experience: "3 years",
      background: "Science",
      email: "kalam@example.com",
      bgColour: "bg-gray-400",
      image:
        "https://img.freepik.com/free-photo/unpleased-male-teacher-wearing-glasses-points-with-pointer-stick-blackboard-sitting-table-with-school-tools-classroom_141793-114329.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
    },
    {
      number: "012225545655",
      name: "Tasnim Akter",
      location: "Dhaka",
      experience: "1 year",
      background: "Commerce",
      email: "tasnim@example.com",
      bgColour: "bg-indigo-400",
      image:
        "https://img.freepik.com/free-photo/young-woman-standing-arms-crossed-sweater-black-jeans-looking-pretty-front-view_176474-47465.jpg?w=996&t=st=1680458185~exp=1680458785~hmac=af95f1a9348feb3d2b26c8c025b68c74ebb1d39f0547f7fa258b22fc0f085ac0",
    },
    {
      number: "012225545853",
      name: "Md. Anisur Rahman",
      location: "Chittagong",
      experience: "9 years",
      background: "Humanity",
      email: "anis@example.com",
      bgColour: "bg-orange-400",
      image:
        "https://img.freepik.com/free-photo/man-teacher-wearing-glasses-sitting-school-desk-front-blackboard-classroom-showing-chalkboard-explaining-lesson-pointing-with-index-finger-being-intrigued_141793-133118.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
    },
  ];

  return (
    <div className=" mx-auto mt-10 max-w-screen-xl">
      <div className="flex">
        <h1 className="text-4xl uppercase text-start font-bold">
          Here Is our <br />
          best teachers
        </h1>
        <div className="divider  bg-black  w-1 divider-horizontal"></div>
        <p className="flex text-xl text-black flex-col font-semibold justify-center items-center">
          Get access to our top-performing teachers and take your learning to
          the next level.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {teachers.map((teacher, index) => (
          <OurBestTeacher teacher={teacher} key={index}></OurBestTeacher>
        ))}
      </div>
    </div>
  );
};

export default OurBestTeachers;
