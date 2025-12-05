import { Box, Button, FormGroup, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useApplication } from "../hooks/useApplication";
import { CourseCard } from "../components/CourseCard";
import { SelectProvider, useSelect } from "../components/SelectProvider";

export interface Course {
  id: string;
  title: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}

export const Enroll = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [refresh, setRefresh] = useState(true);
  const { uploadCourse, fetchCourses } = useApplication();
  const { select } = useSelect();

  const handleClick = async () => {
    const response = await uploadCourse({ title, code });
    setRefresh(true);
  };

  const handleChange = (target: any) => {
    if (target.checked) setSelectedCourses([...selectedCourses, target.name]);
    else
      setSelectedCourses(
        selectedCourses.filter((course) => course !== target.name)
      );
  };

  useEffect(() => {
    if (!refresh) return;
    (async () => {
      const response = await fetchCourses();
      setCourses(response.data.items);
    })();
    setRefresh(false);
    console.log("refresh");
  }, [refresh]);

  useEffect(()=> {
    console.log(select);
  },[select])

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "0.4rem",
      }}
    >
      All courses
        <FormGroup
          sx={{
            display: "flex",
            width: "15rem",
            gap: "0.3rem",
            height: "fit-content",
          }}
        >
          {courses.map((course) => (
            // <FormControlLabel
            //   sx={{
            //     display: "flex",
            //     width: "100%",
            //     justifyContent: "center",
            //     alignItems: "center",
            //     padding: "1rem",
            //   }}
            //   key={`${course.id}`}
            //   name={`${course.id}`}
            //   control={<Checkbox onChange={(e) => handleChange(e.target)} />}
            //   label={`${course.title}: ${course.code}`}
            //   labelPlacement={"start"}
            // />
            <>
              <CourseCard course={course} />
            </>
          ))}
        </FormGroup>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "15rem",
          gap: "0.4rem",
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Code"
          variant="outlined"
          onChange={(e) => setCode(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleClick()}>
          Upload
        </Button>
      </Box>
    </Box>
  );
};

// {/* {courseList.map(() =>)} */}
//       {/* make a useX() hook for all backend calls, use axios?, structure code so it's readable */}
//       {/* use card list for selecting courses */}
//       {/* make an intro when registering eg, asking name in 1 page, education on next, courses on next... */}
//       {/* make indexedDB cache for AT LEAST token and user info */}
//       {/* check if useContext needed for user or is it ok to use indexedDB and figure out caching for mobile phones */}
//       {/* check if tauri is compatible with all of the above */}
