import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpApi } from "../../services/auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    whatsappNumber: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    const body = {
      formData: formData,
    };
    e.preventDefault();
    try {
      const result = await SignUpApi(body);
      if (result) {
        console.log("Signup successful:", result);
        navigate("/login"); // Redirect to login or another page upon success
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <input
        type="number"
        name="whatsappNumber"
        placeholder="Whatsapp"
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
