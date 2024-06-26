import React, { useState } from "react";
import axios from "axios";
import { FormContainer, Input, Button, SignupContainer, SignupImage, SignupForm } from "./StyledComponents";
import { useNavigate } from "react-router-dom";
import Image from './signup.webp';
const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      });
      alert("Signup successful!");
      navigate("/login"); // Redirect to login 
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <SignupContainer>
      <SignupImage src={Image} alt="Signup" />
      <SignupForm>
        <FormContainer>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </FormContainer>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
