import React, { useContext } from "react";
import { useToken } from "../components/AuthProvider";
import axios from "../axiosConfig";
import { verifyResponse } from "../components/utils";
import { authClient } from "../utils/auth-client";
import { useNavigate } from "react-router";
export const useAuthentication = () => {
  const { token, setToken, setIsLoggedIn } = useToken();

  interface RegisterPayload {
    email: string;
    password: string;
    name: string;
  }

  interface LoginPayload {
    email: string;
    password: string;
  }

  const logOut = async () => {
    let state = 0;
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          state = 1;
        },
      },
    });
    setToken("");
    return state;
  };

  const register = async (payload: RegisterPayload) => {
    const { email, password, name } = payload;
    const { data, error } = await authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        // image, // User image URL (optional)
        // callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
      },
      {
        onRequest: (ctx) => {
          console.log("loading");
        },
        onSuccess: (ctx) => {
          console.log("yay");
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );

    if (error === null) {
      const response = await axios.post("/user/register", { id: data.user.id });
      setToken(data.token as string);
      setIsLoggedIn(true);
    }

    console.log(data);
    console.log(error);
  };

  const login = async (payload: LoginPayload) => {
    const { email, password } = payload;
    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        // callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
      },
      {
        onRequest: (ctx) => {
          console.log("loading");
        },
        onSuccess: (ctx) => {
          console.log("yay");
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );

    if (error === null) {
      setToken(data.token as string);
      setIsLoggedIn(true);
    }
  };
  const registerOAuth = async (payload: RegisterPayload) => {
    const response = await axios.post("/user/register", payload);
    if (response.status === 200) setToken(response.data.token);
    verifyResponse(response.status);
    return response;
    //
  };

  const loginOAuth = async (payload: LoginPayload) => {
    const response = await axios.post("/user/sign-in", payload);
    if (response.status === 200) setToken(response.data.token);
    verifyResponse(response.status);
    return response;
    //
  };

  const checkLogIn = () => {
    if (token !== "") {
      setIsLoggedIn(true);
      return;
    } else {
      const tokenExists = getToken();
      if (tokenExists) {
        setIsLoggedIn(true);
        return;
      }
    }
    setIsLoggedIn(false);
  };

  const getToken = () => {
    if (token !== "") return 1;
    const { data: session } = authClient.useSession();
    if (!session) return 0;
    setToken(session?.session.token as string);
    return 1;
  };

  return {
    logOut,
    register,
    login,
    registerOAuth,
    loginOAuth,
    getToken,
    checkLogIn,
  };
};
