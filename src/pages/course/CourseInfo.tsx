import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useToken } from "../../components/AuthProvider";
import { useParams } from "react-router";
import { useApplication } from "../../hooks/useApplication";
import { Course } from "../admin/CourseMgmt";
import { StyledLink } from "../../components/Header";

export const CourseInfo = () => {
  const { isLoggedIn } = useToken();
  const { code } = useParams();
  const { fetchCourseByCode, enrollCourses } = useApplication();
  const [course, setCourse] = useState<Course>();
  const [timer, setTimer] = useState("00:00:00:00");

  const handleEnroll = async () => {
    const response = await enrollCourse({ code: course?.code });
  };

  useEffect(() => {
    (async () => {
      if (code === undefined || code === "") {
        console.log(code);
        return;
      }
      const response = await fetchCourseByCode(code);
      setCourse(response.data);
      console.log(response.data);
    })();
  }, []);

  setInterval(function () {
    if (course?.endDate !== undefined && course.startDate !== undefined) {
      const startDate = new Date(course?.startDate);
      const current = new Date();
      let time = startDate.getTime() - current.getTime();

      let days = Math.floor(time / (1000 * 60 * 60 * 24));
      let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((time % (1000 * 60)) / 1000);

      setTimer(`${days}:${hours}:${minutes}:${seconds}`);
    }
  }, 1000);

  //fetch course based on url params
  return (
    <Container>
      <Box>
        <Title>{course?.title}</Title>
        <Tutor>Tutor: {course?.tutor}</Tutor>
      </Box>
      <CourseText>{course?.description}</CourseText>
      <CountdownBox>
        <CountdownText>This course is scheduled to begin in:</CountdownText>
        <CountdownDate>{timer}</CountdownDate>
        {isLoggedIn && (
          <CountdownButton onClick={() => handleEnroll()}>
            Enroll
          </CountdownButton>
        )}
        {!isLoggedIn && (
          <>
            <HelperText>You need to be authenticated to enroll</HelperText>
            <StyledLink to="/login">
              <CountdownButton>Log in</CountdownButton>
            </StyledLink>
          </>
        )}
      </CountdownBox>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled(Box)`
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -0.0625rem;
  line-height: normal;
`;

const Tutor = styled(Box)`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0;
`;

const CourseText = styled(Box)`
  color: #a69e9e;
  font-size: 1.25rem;
  font-weight: 500;
`;

const CountdownBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
  gap: 1rem;
  border-radius: 1rem;
  border: 2px solid white;
`;

const CountdownText = styled(Box)`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.0625rem;
`;

const CountdownDate = styled(CountdownText)`
  letter-spacing: 0.125rem;
`;

const CountdownButton = styled(Box)`
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.0625rem;
  background-color: #13a4cd;
`;

const HelperText = styled(CountdownText)`
  color: #a69e9e;
  font-size: 1.5rem;
`;
