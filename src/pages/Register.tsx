import { Box, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useApplication } from "../hooks/useApplication";
import { Container } from "./Landing";
import Github from "/github.svg";
import { authClient } from "../utils/auth-client";
import { useToken } from "../components/AuthProvider";
import axios from "../axiosConfig";
import { useAuthentication } from "../hooks/useAuthentication";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const { register } = useAuthentication();

  const handleSubmit = async () => {
    register({ email, password, name });
  };

  return (
    <Container>
      <BackgroundFill>
        <Title>Get Started</Title>
        <ButtonGroup>
          <OauthButton>
            Register with GitHub
            <img src={Github} height={24} width={24} />
          </OauthButton>
          <OauthButton>
            Register with Google
            <Google />
          </OauthButton>
        </ButtonGroup>
        <EmailInput
          variant="outlined"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <EmailInput
          variant="outlined"
          label="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <EmailInput
          variant="outlined"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton onClick={() => handleSubmit()}>Register</SubmitButton>
      </BackgroundFill>
    </Container>
  );
};

const BackgroundFill = styled(Box)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled(Box)`
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: -0.125rem;
`;

const EmailInput = styled(TextField)`
  width: 100%;
  background-color: #252222;
  border: none;
`;

const ButtonGroup = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-direction: column;
  width: 100%;
`;

const OauthButton = styled(Box)`
  font-weight: 700;
  letter-spacing: -0.0625rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252222;
  border: 1px solid white;
  padding: 0.625rem 0.5rem;
  gap: 0.5rem;
  border-radius: 0.2rem;
`;

const Google = styled(Box)``;

const SubmitButton = styled(Box)`
  background-color: #13a4cd;
  width: 100%;
  padding: 0.6rem;
  font-size: 1.1rem;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.2rem;
  cursor: pointer;
`;
