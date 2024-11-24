import React from "react";
import SignUp from "../screens/auth/SignUp";
import SignIn from "../screens/auth/SignIn";
import { useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const AuthRoute = () => {
  const location = useLocation();

  return (
    <MainLayout>
      {location.pathname === "/signup" ? <SignUp /> : <SignIn />}
    </MainLayout>
  );
};

export default AuthRoute;
