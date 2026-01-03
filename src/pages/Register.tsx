import {
  Box,
  Button,
  Input,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../components/AuthProvider";
import { useApplication } from "../hooks/useApplication";
import { AxiosResponse } from "axios";
import { Container } from "./Landing";
import Github from "/github.svg";

// merge into one with login?

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { register } = useApplication();
  let navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await register({
      fullName: fullName,
      email: email,
      password: password,
    });
    if (response.status === 200) navigate("/dashboard");
    else alert("majmune");
  };

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100%",
    //   }}
    // >
    //   <form action={handleSubmit}>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "0.4rem",
    //         width: "fit-content",
    //       }}
    //     >
    //       <Typography textAlign="center">Register here</Typography>
    //       <TextField
    //         name="fullName"
    //         id="outlined-basic"
    //         label="Full Name"
    //         variant="outlined"
    //         onChange={(e) => setFullName(e.target.value)}
    //       />
    //       <TextField
    //         name="email"
    //         id="outlined-basic"
    //         label="Email"
    //         variant="outlined"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <TextField
    //         name="password"
    //         id="outlined-basic"
    //         label="Password"
    //         variant="outlined"
    //         type="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <Button type="submit" variant="contained">
    //         Register
    //       </Button>
    //       <Typography textAlign="center">
    //         Did you want to <Link to="/login">log in</Link> instead?
    //       </Typography>
    //     </Box>
    //   </form>
    // </Box>
    <Container>
      <BackgroundFill>
        <Title>Get Started</Title>
        <EmailInput variant="outlined" label="Email" />
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
        <SubmitButton onClick={() => handleSubmit()} />
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
  padding: 0.625rem 0.5rem;
  gap: 0.5rem;
`;

const Google = styled(Box)``;

const SubmitButton = styled(Box)``;
