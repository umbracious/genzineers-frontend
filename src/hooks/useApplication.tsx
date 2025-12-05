import React, { useContext } from "react";
import { useAuth } from "../components/AuthProvider";
import axios from "../axiosConfig";
export const useApplication = () => {
  const { setToken } = useAuth();

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
    console.log(response);
    return response;
  };

  const uploadCourse = async(payload: CoursePayload) => {
    const response = await axios.post("/course",
      payload
    );
    return response;
  };

  // const fetchCourse = async (id) => {};
  // const fetchProfile = async () => {};
  // const uploadProfile = async (payload) => {};
  // const updateProfile = async (payload) => {};
  // const uploadCourseSel = async (payload) => {};
  // const verifyToken = async() => {};

  return { register, login, fetchCourses, uploadCourse };
};