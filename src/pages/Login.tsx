import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../components/AuthProvider";
import { useApplication } from "../hooks/useApplication";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useApplication();
  let navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await login({
      email: email,
      password: password,
    });
    if (response.status === 200) navigate("/dashboard");
    else alert("majmune");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <form action={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            width: "fit-content",
          }}
        >
          <Typography textAlign="center">Login here</Typography>
          <TextField
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            name="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Typography textAlign="center">
            Did you want to <Link to="/register">register</Link> instead?
          </Typography>
        </Box>
      </form>
    </Box>
  );
};
