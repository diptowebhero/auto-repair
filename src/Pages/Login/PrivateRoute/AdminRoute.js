import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hook/useAuth";
import loader from "../../../assets/images/loader.gif";
const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { AllContext } = useAuth();
  const { loading, admin, user } = AllContext;
  if (loading) {
    return (
      <div className="text-center">
        <img src={loader} alt="" />
      </div>
    );
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
