import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../components/AuthProvider";
import { useApplication } from "../hooks/useApplication";
import axios, { AxiosResponse } from "axios";
import { authClient } from "../utils/auth-client";

// merge into one with login?

export const RegisterA = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { register } = useApplication();
  let navigate = useNavigate();

  const { setToken } = useAuth();

  const handleSubmit = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        // image, // User image URL (optional)
        // callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
      },
      {
        onRequest: (ctx) => {
          console.log("loading");
        },
        onSuccess: (ctx) => {
          console.log("yay");
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );

    if (error === null) {
      const response = await axios.post("/user/register", { id: data.user.id });
      console.log(response);
      setToken(data.token as string);
      console.log(data.token);
    }

    console.log(data);
    console.log(error);
  };

  const githubRegister = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  const googleRegister = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <form action={handleSubmit} encType="multipart/form-data" method="post">
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
            onChange={(e) => setName(e.target.value)}
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
          <input type="file" name="uploaded_file" />
          <Button type="submit" variant="contained">
            Register
          </Button>
          <Button onClick={() => githubRegister()} variant="contained">
            Register with GitHub
          </Button>
          <Button onClick={() => googleRegister()} variant="contained">
            Register with Google
          </Button>
          <Typography textAlign="center">
            Did you want to <Link to="/login">log in</Link> instead?
          </Typography>
        </Box>
      </form>
    </Box>
  );
};
