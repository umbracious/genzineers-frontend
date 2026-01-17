import React from "react";
import { Course } from "./CourseMgmt";
import { Box, Button, styled } from "@mui/material";

export const CourseCard = ({ course }: any) => {
  return (
    <Container>
      <Title>
        {course.title}: {course.code}
      </Title>
      <Button>Edit</Button> 
      {/* new page for edit */}
      <Button>Delete</Button>
      {/* show confirmation and delete afterwards */}
    </Container>
  );
};

export const Container = styled(Box)`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid white;
`;

export const Title = styled(Box)`
  width: 20rem;
`;
