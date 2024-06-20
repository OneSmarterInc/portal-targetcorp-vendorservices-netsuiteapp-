import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = Cookies.get("targetToken");

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
