import React, { useContext } from "react";
import { useToken } from "../components/AuthProvider";
import axios from "../axiosConfig";
import { verifyResponse } from "../components/utils";
import { authClient } from "../utils/auth-client";
import { useAuthentication } from "./useAuthentication";
export const useApplication = () => {
  const { setToken } = useToken();
  const { getToken } = useAuthentication();
  interface CoursePayload {
    title: string;
    code: string;
    description: string;
    tutor: string;
    startDate: Date;
    endDate: Date;
  }

  interface UpdateCoursePayload {
    title: string;
    code: string;
    description: string;
    tutor: string;
    link: string;
    startDate: Date;
    endDate: Date;
  }

  const fetchCourses = async () => {
    const response = await axios.get("/course");
    verifyResponse(response.status);
    return response;
  };

  const fetchCourseByCode = async (code: string) => {
    const response = await axios.get(`/course/${code}`);
    return response;
  };

  const uploadCourse = async (payload: CoursePayload) => {
    const response = await axios.post("/course", payload);
    verifyResponse(response.status);
    return response;
  };

  const updateCourse = async (payload: UpdateCoursePayload) => {
    const response = await axios.patch(`/course/${payload.code}`, payload);
    verifyResponse(response.status);
    return response;
  };

  const enrollCourse = async (payload: any) => {
    const { data: session } = await authClient.getSession();
    const response = await axios.post(
      "/user/enroll",
      { ...payload, id: session?.user.id },
      {
        headers: {
          Authorization: `Bearer ${session?.session.token}`,
        },
      }
    );
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
    fetchCourses,
    fetchCourseByCode,
    uploadCourse,
    updateCourse,
    enrollCourse,
    fetchEnrolled,
  };
};
