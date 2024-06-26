import React, { useState } from "react";
import { FormContainer, Input, Button, FullHeightContainer } from "./StyledComponents";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/resetpassword", {
        email,
        newPassword,
        confirmPassword,
      });

      if (response.status === 200) {
        alert("Password reset successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Password reset failed. Please try again.");
    }
  };

  return (
    <FullHeightContainer>
      <FormContainer>
        <h2>Reset Password</h2>
        <p>Please enter your email and new password.</p>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit">Reset Password</Button>
        </form>
      </FormContainer>
    </FullHeightContainer>
  );
};

export default ForgetPassword;
