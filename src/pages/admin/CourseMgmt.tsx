import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useApplication } from "../../hooks/useApplication";

export interface Course {
  id: string;
  title: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}

export const CourseMgmt = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [refresh, setRefresh] = useState(true);
  const { uploadCourse, fetchCourses } = useApplication();

  const handleClick = async () => {
    const response = await uploadCourse({ title, code, description });
    setRefresh(true);
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
    <Box sx={{display:"flex", width:"100%", height:"100%", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <Box>CourseMgmt</Box>
      <Box>Add a Course</Box>
      <input onChange={(e) => setTitle(e.target.value)} />
      <input onChange={(e) => setCode(e.target.value)} />
      <input onChange={(e) => setDescription(e.target.value)} />
      <Button onClick={() => handleClick()}>Add</Button>

      <Box>Course list</Box>
      <Box>
        {courses.map((course) => (
          <Box>
            {course.title}: {course.code}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
