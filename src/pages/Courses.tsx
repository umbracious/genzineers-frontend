import { Box, Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useApplication } from "../hooks/useApplication";
import { Container } from "./Landing";
import Background from "../../public/background.png";

export const Courses = () => {
  const { fetchEnrolled, fetchCourses } = useApplication();
  const [enrolled, setEnrolled] = useState<Course[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  interface Course {
    title: string;
    code: string;
  }

  // refactor hook for fetching enrolled and available courses, make page accessible even if logged out
  // figure out card sizing

  useEffect(() => {
    (async () => {
      //   const response = await fetchEnrolled();
      //   setEnrolled(response.data);

      const response2 = await fetchCourses();
      setCourses(response2.data.items);
    })();
  }, []);
  return (
    <Container sx={{ justifyContent: "normal" }}>
      {/* <Title>Enrolled</Title>
        <CardGroup size={4}>
            {enrolled.map((course) => (
                <Card>
                    <CardImage/>
                    <CardTitle>{course.title}</CardTitle>
                    <CardCode>{course.code}</CardCode>
                    <CardButton>View</CardButton>
                </Card>
            ))}
        </CardGroup> */}
      <Title>Available</Title>
      <CardGroup container spacing={2}>
        {courses.map((course) => (
          <Card size={4}>
            <CardImage>
              <img
                src={Background}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  borderRadius: "1.25rem",
                }}
              />
            </CardImage>
            {/* research how to calculate height if we have a set height for full parent container but not container for img,*/}
            <Box>
              <CardTitle>{course.title}</CardTitle>
              <CardCode>{course.code}</CardCode>
            </Box>
            <CardButton sx={{ backgroundColor: "#4ca141" }}>Enroll</CardButton>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
};

const Title = styled(Box)`
  padding: 0 0.625rem;
  font-weight: 700;
  font-size: 2.5rem;
`;

const CardGroup = styled(Grid)`
  width: 100%;
`;

const Card = styled(Grid)`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 22.25rem;
  font-weight: 500;
  font-style: 1.25rem;
  gap:0.25rem;
`;

const CardImage = styled(Box)`
  border-radius: 1.25rem;
  width: 100%;
  height: 59%;
`;

const CardTitle = styled(Box)`
  font-weight: 500;
  font-size: 1.25rem;
`;

const CardCode = styled(CardTitle)``;

const CardButton = styled(Box)`
  width: 100%;
  padding: 0.3125rem 0;
  border-radius: 0.625rem;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  cursor:pointer; 
`;
