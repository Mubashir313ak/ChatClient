import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../screens/dashboard/Dashboard";
import MainLayout from "../layout/MainLayout";

const DashboardRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <MainLayout>
      {isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
    </MainLayout>
  );
};

export default DashboardRoute;
