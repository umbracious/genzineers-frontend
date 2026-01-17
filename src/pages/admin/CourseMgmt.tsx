import { Box, Button, styled, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useApplication } from "../../hooks/useApplication";
import { CourseCard } from "./CourseCard";
import { Title } from "../course/CourseInfo";
import DatePicker from "react-datepicker";

export interface Course {
  id: string;
  title: string;
  code: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  link: string;
  startDate: Date;
  endDate: Date;
  tutor: string;
}

export const CourseMgmt = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [tutor, setTutor] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const [courses, setCourses] = useState<Course[]>([]);
  const [refresh, setRefresh] = useState(true);
  const { uploadCourse, fetchCourses } = useApplication();

  const handleClick = async () => {
    if (
      title !== "" &&
      code !== "" &&
      description !== "" &&
      tutor !== "" &&
      startDate !== undefined &&
      endDate !== undefined
    ) {
      const response = await uploadCourse({
        title,
        code,
        description,
        tutor,
        startDate,
        endDate,
      });
      setRefresh(true);
    }
  };

  useEffect(() => {
    if (!refresh) return;
    (async () => {
      const response = await fetchCourses();
      setCourses(response.data.items);
    })();
    setRefresh(false);
  }, [refresh]);
  return (
    <Container>
      <Title>Course Management</Title>
      <AddContainer>
        <SubTitle>Add a Course</SubTitle>
        <StyledTextField
          label="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <StyledTextField
          label="Code"
          onChange={(e) => setCode(e.target.value)}
        />
        <StyledTextField
          label="Tutor"
          onChange={(e) => setTutor(e.target.value)}
        />
        <StyledTextField
          label="Description"
          multiline
          rows={6}
          onChange={(e) => setDescription(e.target.value)}
        />
        <DatePicker showTimeSelect dateFormat="Pp" selected={startDate} onChange={(date: any) => setStartDate(date)} />
        <DatePicker showTimeSelect dateFormat="Pp" selected={endDate} onChange={(date: any) => setEndDate(date)} />
        <Button onClick={() => handleClick()}>Add</Button>
      </AddContainer>
      <SubTitle>Course list</SubTitle>
      {/* <Box>
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </Box> */}
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const AddContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 25rem;
  gap: 1rem;
`;

export const SubTitle = styled(Box)`
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.0625rem;
`;

export const StyledTextField = styled(TextField)`
  background-color: #252222;
`;

export const AddButton = styled(Button)``;
