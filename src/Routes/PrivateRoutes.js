import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (user) {
        return children;
    } else {
        return <Navigate to={"/login"} state={{ from: location }} replace />;
    }
};

export default PrivateRoutes;
