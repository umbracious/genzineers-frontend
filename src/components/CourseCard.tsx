import React, { useEffect, useState } from "react";
import { Course } from "../pages/Enroll";
import { Box, Card } from "@mui/material";
import { useSelect } from "./SelectProvider";

export const CourseCard = ({ course }: { course: Course }) => {
  const { select, setSelect } = useSelect();

  const handleClick = () => {
    if (!select.includes(course.id)) setSelect([...select, course.id]);
    else setSelect(select.filter((sel) => sel !== course.id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.6rem",
        boxSizing: "border-box",
        border: select.includes(course.id) ? "1px solid white" : "none",
      }}
      onClick={() => handleClick()}
    >
      {course.title}
    </Box>
  );
};
