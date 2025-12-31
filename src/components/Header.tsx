import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor: "rgba(18, 18, 18, 0.8)",
        justifyContent: "space-between",
        padding: "1.1rem 1.825rem",
        borderRadius: "5px",
        fontSize:"1.2rem",
        fontWeight:500
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Box>genZineers</Box>
      </Link>
      <Box sx={{ display: "flex" }}>
        <Link to="/courses" style={{ textDecoration: "none", color:"white" }}>
          <Box sx={{ padding: "0 1rem" }}>Courses</Box>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
          <Box sx={{ padding: "0 1rem" }}>About</Box>
        </Link>
      </Box>

      <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
        <Box>Register</Box>
      </Link>
    </Box>
  );
};
