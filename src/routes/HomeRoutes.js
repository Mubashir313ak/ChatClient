import React from "react";
import HomeHero from "../screens/home/Hero";
import { Route, Routes } from "react-router-dom";

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeHero />} />
    </Routes>
  );
};

export default HomeRoute;
