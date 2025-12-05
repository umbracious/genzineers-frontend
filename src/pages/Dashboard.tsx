import React from "react";
import { useAuth } from "../components/AuthProvider";
import { Box, Button } from "@mui/material";
import { useApplication } from "../hooks/useApplication";
import { Link } from "react-router";

export const Dashboard = () => {
  const { token } = useAuth();
  const { fetchCourses } = useApplication();
  const handleClick = async() => {
    console.log("e");
    const response = await fetchCourses();
    console.log(response);
  }
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
        <Link to="/enroll"><Button variant="contained" onClick={()=>handleClick()}>Enroll</Button></Link>
      </Box>
    </Box>
  );
};
