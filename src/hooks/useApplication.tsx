import React, { useContext } from "react";
import { useAuth } from "../components/AuthProvider";
import axios from "../axiosConfig";
export const useApplication = () => {
  const { token, setToken } = useAuth();

  interface RegisterPayload {
    fullName: String;
    email: String;
    password: String;
  }

  interface LoginPayload {
    email: String;
    password: String;
  }

  interface CoursePayload {
    title: String;
    code: String;
  }

  // const fetchCourses = async () => {};
  // const fetchCourse = async (id) => {};
  // const fetchProfile = async () => {};
  // const uploadProfile = async (payload) => {};
  // const updateProfile = async (payload) => {};
  // const uploadCourseSel = async (payload) => {};
  // const verifyToken = async() => {};
  const register = async (payload: RegisterPayload) => {
    const response = await axios.post("/user/sign-up", payload);
    if (response.status === 200) setToken(response.data.token);

    return response;
  };

  const login = async (payload: LoginPayload) => {
    const response = await axios.post("/user/sign-in", payload);
    if (response.status === 200) setToken(response.data.token);
    return response;
  };

  const fetchCourses = async () => {
    const response = await axios.get("/course");
    return response;
  };

  const uploadCourse = async(payload: CoursePayload) => {
    const response = await axios.post("/course",
      payload
    );
    return response;
  };

  return { register, login, fetchCourses, uploadCourse };
  // const login = async (payload) => {};
};

// console.log(email);
//     console.log(password);

//     const response = await fetch("http://localhost:6868/user/sign-up", {
//       method: "POST",
//       body: JSON.stringify({
//         fullName: fullName,
//         email: email,
//         password: password,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     });

//     const data = await response.json();
//     setToken(data.token);
//     if(response.status === 200)
//         navigate("/dashboard");
//     else
//         alert("majmune");
//     console.log(data);
