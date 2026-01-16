import { Box, Button, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router";

export const Landing = () => {
  return (
    <Container>
      <Hero>
        <HeroText>Tutoring done right.</HeroText>
        <HeroSubText>Match with your perfect teacher</HeroSubText>
      </Hero>
      <Link to="/courses">
        <EnrollButton>Enroll</EnrollButton>
      </Link>
    </Container>
  );
};

export const Container = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Hero = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
`;

export const EnrollButton = styled(Button)`
  font-size: 1.5rem;
  padding: 0.625rem 2.5rem;
  background-color: #13a4cd;
  border-radius: 0.5rem;
  letter-spacing: 0.0625rem;
  text-decoration: none;
`;

export const HeroText = styled(Box)`
  font-size: 6rem;
  font-weight: 800;
  letter-spacing: -0.1875rem;
  line-height: 7rem;
`;

export const HeroSubText = styled(Box)`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0;
  color: #a69e9e;
`;
