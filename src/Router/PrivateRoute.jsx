import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center my-24">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin" replace state={{ from: location }} />;
};

export default PrivateRoute;
