import { Box, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "./Landing";
import Github from "/github.svg";
import { useAuthentication } from "../hooks/useAuthentication";
import { StyledLink } from "../components/Header";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const { login } = useAuthentication();

  const handleSubmit = async () => {
    login({ email, password });
  };

  return (
    <Container>
      <BackgroundFill>
        <Title>Log in</Title>
        <ButtonGroup>
          <OauthButton>
            Log in with GitHub
            <img src={Github} height={24} width={24} />
          </OauthButton>
          <OauthButton>
            Log in with Google
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
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box>
          Already have an account? <StyledLink to="/login">Register</StyledLink>{" "}
          instead
        </Box>
        <SubmitButton onClick={() => handleSubmit()}>Log in</SubmitButton>
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
