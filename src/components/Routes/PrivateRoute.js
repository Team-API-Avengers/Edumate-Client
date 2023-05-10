import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  if (!user) {
    return <Navigate to={"/authentication/login"} state={{ from: location }}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
