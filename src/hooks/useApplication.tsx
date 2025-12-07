import React, { useContext } from "react";
import { useAuth } from "../components/AuthProvider";
import axios from "../axiosConfig";
import { useToken } from "./useToken";
import { verifyResponse } from "../components/utils";
export const useApplication = () => {
  const { setToken } = useAuth();
  const { getToken } = useToken();

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
    if(response.status === 200)
      setToken(response.data.token);
    verifyResponse(response.status);
    return response;
  };

  const login = async (payload: LoginPayload) => {
    const response = await axios.post("/user/sign-in", payload);
    if(response.status === 200)
      setToken(response.data.token);
    verifyResponse(response.status);
    return response;
  };

  const fetchCourses = async () => {
    const response = await axios.get("/course");
    verifyResponse(response.status);
    return response;
  };

  const uploadCourse = async (payload: CoursePayload) => {
    const response = await axios.post("/course", payload);
    verifyResponse(response.status);
    return response;
  };

  const uploadCourseSel = async (payload: any) => {
    const token = await getToken();
    const response = await axios.post("/user/enroll", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    verifyResponse(response.status);
    return response;
  };

  const fetchEnrolled = async () => {
    const token = await getToken();
    const response = await axios.get("/user/enroll", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    verifyResponse(response.status);
    return response;
  };

  // const fetchCourse = async (id) => {};
  // const fetchProfile = async () => {};
  // const uploadProfile = async (payload) => {};
  // const updateProfile = async (payload) => {};

  return {
    register,
    login,
    fetchCourses,
    uploadCourse,
    uploadCourseSel,
    fetchEnrolled,
  };
};
