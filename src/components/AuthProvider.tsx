import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
}

interface AuthProviderProps {
    children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children } : AuthProviderProps ) => {
  const [token, setToken] = useState("");

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context) 
    throw new Error("useAuth must be used inside <AuthProvider>");
  return context;
}