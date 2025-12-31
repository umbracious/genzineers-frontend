import { Box, Grid, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useApplication } from '../hooks/useApplication';

export const Courses = () => {
    const { fetchEnrolled, fetchCourses } = useApplication();
    const [enrolled, setEnrolled] = useState<Course[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);
    
      interface Course {
        title: string;
        code: string;
      }

    useEffect(() => {
        (async () => {
          const response = await fetchEnrolled();
          setEnrolled(response.data);

          const response2 = await fetchCourses();
          setCourses(response2.data.items);
        })();
      }, []);
  return (
    <Box>
        <Title>Enrolled</Title>
        <CardGroup size={4}>
            {enrolled.map((course) => (
                <Card>
                    <CardImage/>
                    <CardTitle></CardTitle>
                    <CardCode></CardCode>
                    <CardButton></CardButton>
                </Card>
            ))}
        </CardGroup>
        <Title>Available</Title>
        <CardGroup>
            {courses.map((course) => (
                <Card></Card>
            ))}
        </CardGroup>
    </Box>
  )
}

const Title = styled(Box)`
      padding: 0 0.625rem;
      font-weight: 700;
      font-size: 2.5rem;
`;

const CardGroup = styled(Grid)`
    width: 100%;
`;

const Card = styled(Box)`
    padding: 0.5rem;
    display: flex;
`;

const CardImage = styled(Box)`
    border-radius: 1.25rem;
`;

const CardTitle = styled(Box)`
    font-weight: 500;
    font-size: 1.25rem;
`;

const CardCode = styled(CardTitle)``;

const CardButton = styled(Box)`
    width:100%;
    padding: 0.3125rem 0;
    border-radius: 0.625rem;
    font-weight: 600;
    font-size: 1.25rem;
`;


