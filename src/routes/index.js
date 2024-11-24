import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeRoute from "./HomeRoutes";
import AuthRoute from "./Auth";
import DashboardRoute from "./Dashboard";
import ProfileRoute from "./Profile";
import MessageForm from "../screens/chat/chatRoom";
import ChatPage from "../screens/chat/Parent";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeRoute />} />
    <Route path="/signup" element={<AuthRoute />} />
    <Route path="/login" element={<AuthRoute />} />
    <Route path="/dashboard" element={<DashboardRoute />} />
    <Route path="/profile" element={<ProfileRoute />} />

    <Route path="/chat" element={<MessageForm />} />
    <Route path="/fetch-messages" element={<ChatPage />} />
  </Routes>
);

export default AppRoutes;
