import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useApplication } from "../hooks/useApplication";

export const Enroll = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const { uploadCourse } = useApplication();

  const handleClick = async() => {
    const response = await uploadCourse({ title, code});
    console.log(response);
  };
  return (
    <Box>
      All courses
      {/* {courseList.map(() =>)} */}
      {/* make a useX() hook for all backend calls, use axios?, structure code so it's readable */}
      {/* use card list for selecting courses */}
      {/* make an intro when registering eg, asking name in 1 page, education on next, courses on next... */}
      {/* make indexedDB cache for AT LEAST token and user info */}
      {/* check if useContext needed for user or is it ok to use indexedDB and figure out caching for mobile phones */}
      {/* check if tauri is compatible with all of the above */}
    <Box>
      <TextField label="Title" variant="outlined" onChange={(e) => setTitle(e.target.value)}/>
      <TextField label="Code" variant="outlined" onChange={(e) => setCode(e.target.value)}/>
      <Button onClick={() => handleClick()}>Upload new course</Button>
      </Box>
    </Box>
  );
};
