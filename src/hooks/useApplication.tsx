import React, { useContext } from "react";
import { useToken } from "../components/AuthProvider";
import axios from "../axiosConfig";
import { verifyResponse } from "../components/utils";
import { authClient } from "../utils/auth-client";
import { useAuthentication } from "./useAuthentication";
export const useApplication = () => {
  const { setToken } = useToken();
  const { getToken } = useAuthentication();

  interface RegisterPayload {
    id: string;
  }

  interface LoginPayload {
    email: string;
    password: string;
  }

  interface CoursePayload {
    title: string;
    code: string;
    description: string;
  }

  const register = async (payload: RegisterPayload) => {
    const response = await axios.post("/user/register", payload);
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
    const token = getToken();
    const { data: session } = await authClient.getSession();
    const response = await axios.post("/user/enroll", {...payload, id:session?.user.id}, {
      headers: {
        Authorization: `Bearer ${session?.session.token}`,
      },
    });
    verifyResponse(response.status);
    return response;
  };

  const fetchEnrolled = async () => {
    const token = getToken();
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
