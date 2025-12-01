import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext, useAuth } from "../components/AuthProvider";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { token, setToken } = useAuth();
  let navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(email);
    console.log(password);

    const response = await fetch("http://localhost:6868/user/sign-up", {
      method: "POST",
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    // if(response.status === 200)
    //     navigate("/dashboard");
    // else
    //     alert("majmune");
    const data = await response.json();
    setToken(data.token);
    console.log(data);
  };

  useEffect(() => {
    console.log(token)
  }, [token]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
          <Typography textAlign="center">Register here</Typography>
          <TextField
            name="fullName"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            onChange={(e) => setFullName(e.target.value)}
          />
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
            Register
          </Button>
          <Typography textAlign="center">
            Did you want to <Link to="/login">log in</Link> instead?
          </Typography>
        </Box>
      </form>
    </Box>
  );
};
