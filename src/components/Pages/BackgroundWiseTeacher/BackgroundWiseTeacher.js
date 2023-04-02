import React from "react";
import { useLoaderData } from "react-router-dom";

const BackgroundWiseTeacher = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default BackgroundWiseTeacher;
