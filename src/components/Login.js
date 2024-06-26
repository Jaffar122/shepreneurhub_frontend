import React, { useState } from "react";
import axios from "axios";
import { FormContainer, Input, Button, LoginContainer, LoginImage, LoginForm } from "./StyledComponents";
import { useNavigate } from "react-router-dom";
import Image from './loginimg2.webp';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/main");
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  function handleClickSignUp(event) {
    navigate("/signup");
  }

  return (
    <LoginContainer>
      <LoginImage src={Image} alt="Login" />
      <LoginForm>
        <FormContainer>
          <h2>Login</h2>
          <p>Welcome back! Login to access the ShepreneurHub.</p>
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Continue</Button>
          </form>
          <Button onClick={handleClickSignUp}>Don't have an account?</Button>
          <p>
            <a href="forget-password">Forget your password?</a>
          </p>
        </FormContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
