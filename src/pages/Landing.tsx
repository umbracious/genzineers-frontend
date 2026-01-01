import { Box, Button, styled } from "@mui/material";
import React from "react";

export const Landing = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
        }}
      >
        <Box
          sx={{
            fontSize: "6rem",
            fontWeight: 800,
            letterSpacing: "-0.1875rem",
            lineHeight: "7rem",
          }}
        >
          Tutoring done right.
        </Box>
        <Box
          sx={{
            fontSize: "2rem",
            fontWeight: 600,
            letterSpacing: 0,
            color: "#A69E9E",
          }}
        >
          Match with your perfect teacher
        </Box>
      </Box>
      <Button
        sx={{
          fontSize: "1.5rem",
          padding: "0.625rem 2.5rem",
          backgroundColor: "#13a4cd",
          borderRadius: "0.5rem",
          letterSpacing: "0.0625rem",
        }}
      >
        Enroll
      </Button>
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
