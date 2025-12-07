import React, { createContext, useContext, useEffect, useState } from "react";
import { useApplication } from "../hooks/useApplication";
import { useToken } from "../hooks/useToken";

interface AuthContextType {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState("");
  // useEffect(() => {
  //   if (token === "") {
  //     (async () => {
  //       const { fetchToken } = useToken();
  //       const response = await fetchToken();
  //       setToken(response.data);
  //       console.log(response.data);
  //       setLoading(false);
  //     })();
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside <AuthProvider>");
  return context;
};
