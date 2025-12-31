import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { AuthProvider } from "./components/AuthProvider";
import { Dashboard } from "./pages/Dashboard";
import { Enroll } from "./pages/Enroll";
import { SelectProvider } from "./components/SelectProvider";
import { Header } from "./components/Header";
import { Landing } from "./pages/Landing";
import Background from "../public/background.png";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor: "#121212",
          gap: "2rem",
        }}
      >
        <BrowserRouter>
          <AuthProvider>
            <Header />
            <Box sx={{ height: "100%", display:"flex", width:"100%", paddingBottom:"5rem" }}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/enroll"
                  element={
                    <SelectProvider>
                      <Enroll />
                    </SelectProvider>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Box>
          </AuthProvider>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
