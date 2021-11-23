import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hook/useAuth";
import loader from "../../../assets/images/loader.gif";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { AllContext } = useAuth();
  const { user, loading } = AllContext;
  if (loading) {
    return (
      <div className="text-center">
        <img src={loader} alt="" />
      </div>
    );
  }
  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
