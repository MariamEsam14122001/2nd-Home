import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Check authentication

  return isAuthenticated ? Component : <Navigate to="/Login" />;
};

export default PrivateRoute;
