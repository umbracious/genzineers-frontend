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

  const uploadCourse = async (payload: CoursePayload) => {
    const response = await axios.post("/course", payload);
    return response;
  };

  const uploadCourseSel = async (payload: any) => {
    // payload -> object to be uploaded
    // { course1.id, course2.id, course3.id } -> add user id to all those courses
    const response = await axios.post("/user/enroll", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  };

  const fetchEnrolled = async () => {
    const response = await axios.get("/user/enroll", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  };
  // const fetchCourse = async (id) => {};
  // const fetchProfile = async () => {};
  // const uploadProfile = async (payload) => {};
  // const updateProfile = async (payload) => {};
  // const verifyToken = async() => {};

  return { register, login, fetchCourses, uploadCourse, uploadCourseSel, fetchEnrolled };
};
