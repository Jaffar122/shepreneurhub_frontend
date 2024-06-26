import React from "react";
import styled from "styled-components";
import backgroundImage from "./homeb9-transformed.webp"; // Adjust path to your image
const HomeContainer = styled.div`
  display: flex;
  padding-top: 35px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Full height of viewport minus navbar */
  text-align: center;
  color: #fff; /* White font color for contrast */
  background: url(${backgroundImage}) no-repeat center center fixed; /* Background image */
  background-size: cover; /* Cover the entire container */
`;

const WelcomeMessage = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 0.1rem;
  color: #d314b6;
`;

const Slogan = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 30rem;
  color: #711bde;
`;

function Home() {
  return (
    <HomeContainer>
      <WelcomeMessage>Welcome to ShepreneurHub</WelcomeMessage>
      <Slogan>
        "Empowering Your Choices, Connecting You to Women-Led Businesses!"
      </Slogan>
    </HomeContainer>
  );
}

export default Home;
