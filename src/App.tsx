import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { AuthProvider } from "./components/AuthProvider";
import { Dashboard } from "./pages/Dashboard.non";
import { Enroll } from "./pages/Enroll.non";
import { SelectProvider } from "./components/SelectProvider";
import { Header } from "./components/Header";
import { Landing } from "./pages/Landing";
import Background from "../public/background.png";
import { Courses } from "./pages/Courses";
import { About } from "./pages/About";
import { RegisterA } from "./pages/RegisterA";

// rethink how to implement

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
                <Route path="/registerA" element={<RegisterA />} />
                <Route path="/login" element={<Login />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />

                <Route path="/dashboard" element={<Dashboard />} /> {/* reuse */}
                <Route  
                  path="/enroll"
                  element={
                    <SelectProvider>
                      <Enroll />
                    </SelectProvider>
                  }
                />  {/* reuse */}
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
