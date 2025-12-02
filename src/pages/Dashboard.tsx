import React from "react";
import { useAuth } from "../components/AuthProvider";
import { Box, Button } from "@mui/material";

export const Dashboard = () => {
  const { token } = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height:"100vh",
        justifyContent: "center",
        alignItems: "center",
        gap:"0.6rem"
      }}
    >
      Welcome!
      <Box>
        <Button variant="contained">Enroll</Button>
      </Box>
    </Box>
  );
};
