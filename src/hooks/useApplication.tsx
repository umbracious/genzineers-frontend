import React, { useContext } from "react";
import { useAuth } from "../components/AuthProvider";
import axios from "axios";


export const useApplication = () => {
  const { token, setToken } = useAuth();

  interface Payload {
    fullName: String;
    email: String;
    password: String;
  }

  // const fetchCourses = async () => {};
  // const fetchCourse = async (id) => {};
  // const fetchProfile = async () => {};
  // const uploadProfile = async (payload) => {};
  // const updateProfile = async (payload) => {};
  // const uploadCourseSel = async (payload) => {};
  // const verifyToken = async() => {};
  const register = async (payload: Payload) => {
    const response = await axios.post("http://localhost:6868/user/sign-up", {
      headers: { "Content-Type": "application/json" },
      data: {
        payload,
      },
    });
    if (response.status === 200) {
      setToken(response.data.token);
    }
    return response;
  };
  const login = async (payload) => {};
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
