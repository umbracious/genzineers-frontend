import { Box, Button, styled, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Title } from "../course/CourseInfo";
import { useNavigate, useParams } from "react-router";
import DatePicker from "react-datepicker";
import { useApplication } from "../../hooks/useApplication";
import { Course } from "./CourseMgmt";

export const CourseEdit = () => {
  const { courseCode } = useParams();
  const { fetchCourseByCode, updateCourse } = useApplication();
  const [course, setCourse] = useState<Course>({
    id: "",
    title: "",
    code: "",
    description: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    link: "",
    startDate: new Date(),
    endDate: new Date(),
    tutor: "",
  });

  const navigate = useNavigate();

  const handleUpdate = async () => {
    const response = await updateCourse(course);
    if (response.status === 200) navigate("/admin/courses");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  useEffect(() => {
    (async () => {
      if (courseCode === undefined || courseCode === "") return;
      const response = await fetchCourseByCode(courseCode);
      setCourse(response.data);
      console.log(response.data);
    })();
  }, []);
  return (
    <Container>
      <Title>Edit Course</Title>
      <TextField
        variant="standard"
        label="title"
        name="title"
        defaultValue={course?.title}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        variant="standard"
        label="code"
        name="code"
        defaultValue={course?.code}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        variant="standard"
        label="tutor"
        name="tutor"
        defaultValue={course?.tutor}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        variant="standard"
        multiline
        rows={6}
        label="description"
        name="description"
        defaultValue={course?.description}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        variant="standard"
        label="link"
        name="link"
        defaultValue={course?.link}
        onChange={(e) => handleChange(e)}
      />
      <DatePicker
        showTimeSelect
        dateFormat="Pp"
        selected={course?.startDate}
        onChange={(e: any) => handleChange(e)}
      />
      <DatePicker
        showTimeSelect
        dateFormat="Pp"
        selected={course?.endDate}
        onChange={(e: any) => handleChange(e)}
      />

      {/* add 2 date pickers */}
      <Button onClick={() => handleUpdate()}>Confirm</Button>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
