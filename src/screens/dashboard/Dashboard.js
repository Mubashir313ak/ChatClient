import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  console.log("user", user);

  const onSubmit = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>dasboard</h1>
      <button onClick={onSubmit}>logout</button>
      <button onClick={() => navigate("/profile")}>Profile</button>
      <button onClick={() => navigate("/chat")}>Chat</button>
      <button onClick={() => navigate("/fetch-messages")}>Inbox</button>
    </div>
  );
};

export default Dashboard;
