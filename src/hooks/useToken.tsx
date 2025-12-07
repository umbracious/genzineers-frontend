import React from "react";
import axios from "../axiosConfig";
import { useAuth } from "../components/AuthProvider";
import { verifyResponse } from "../components/utils";

export const useToken = () => {
  const { token, setToken } = useAuth();
  const fetchToken = async () => {
    const response = await axios.get("/user/cookies");
    verifyResponse(response.status);
    return response;
  };

  const getToken = async () => {
    if(token !== "") return token;
    const response = await fetchToken();
    setToken(response.data);
    verifyResponse(response.status);
    return response.data;
  };

  return {
    fetchToken,
    getToken
  };
};
