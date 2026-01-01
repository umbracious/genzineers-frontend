import React, { useEffect, useState } from "react";
import { useAuth } from "../components/AuthProvider";
import { Box, Button } from "@mui/material";
import { useApplication } from "../hooks/useApplication";
import { Link } from "react-router";
import { CourseCard } from "../components/CourseCard";

export const Dashboard = () => {
  const { fetchEnrolled } = useApplication();
  const [enrolled, setEnrolled] = useState<Course[]>([]);

  interface Course {
    title: string;
    code: string;
  }

  useEffect(() => {
    (async () => {
      const response = await fetchEnrolled();
      setEnrolled(response.data);
    })();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.6rem",
      }}
    >
      Welcome!
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {enrolled.map((course) => (
          <Box>{course.title}: {course.code}</Box>
        ))}
      </Box>
      <Box>
        <Link to="/enroll">
          <Button variant="contained">
            Enroll
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
