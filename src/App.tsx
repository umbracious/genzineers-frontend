import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { AuthProvider} from "./components/AuthProvider";
import { Dashboard } from "./pages/Dashboard";
import { Enroll } from "./pages/Enroll";
import { SelectProvider } from "./components/SelectProvider";


function App() {
  const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/enroll" element={<SelectProvider><Enroll /></SelectProvider>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
