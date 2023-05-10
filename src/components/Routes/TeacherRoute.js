import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const TeacherRoute = ({ children }) => {
  const { logUser } = useContext(AuthContext);
  console.log(logUser);

  const location = useLocation();

  if (!logUser?.role === "Teacher") {
    return <Navigate to={"/"} state={{ from: location }}></Navigate>;
  }
  return children;
};

export default TeacherRoute;
