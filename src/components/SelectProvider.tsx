// import React, { createContext, useContext, useState } from "react";

// interface AuthContextType {
//     token: string;
//     setToken: (value: string) => void;
// }

// interface AuthProviderProps {
//     children: React.ReactNode;
// };

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children } : AuthProviderProps ) => {
//   const [token, setToken] = useState("");

//   return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if(!context) 
//     throw new Error("useAuth must be used inside <AuthProvider>");
//   return context;
// }
import React, { createContext, useContext, useState } from "react";

interface SelectContextType {
  select: string[];
  setSelect: React.Dispatch<React.SetStateAction<string[]>>;
}

interface SelectProviderProps {
  children: React.ReactNode;
}

export const SelectContext = createContext<SelectContextType | undefined>(undefined);

export const SelectProvider = ({ children }: SelectProviderProps) => {
  const [select, setSelect] = useState<string[]>([]);

  return <SelectContext.Provider value={{select, setSelect}}>{children}</SelectContext.Provider>;
}

export const useSelect = () => {
  const context = useContext(SelectContext);
  if(!context)
    throw new Error("useSelect() must be used inside <SelectProvider>");
  return context;
};