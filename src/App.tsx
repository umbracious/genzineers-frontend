import "./App.css";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { AuthProvider } from "./components/AuthProvider";
import { SelectProvider } from "./components/SelectProvider";
import { Header } from "./components/Header";
import { Landing } from "./pages/Landing";
import { Courses } from "./pages/course/Courses";
import { About } from "./pages/About";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { CourseMgmt } from "./pages/admin/CourseMgmt";
import { useAuthentication } from "./hooks/useAuthentication";
import { useEffect } from "react";

// rethink how to implement

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const { isLoggedIn } = useAuthentication();
  const logged = isLoggedIn();

  console.log(logged);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <BrowserRouter>
          <Box sx={{width:"70%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <Header />
            <HeroContainer>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/admin/courses"
                  element={
                    <SelectProvider>
                      <CourseMgmt />
                    </SelectProvider>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </HeroContainer>
          </Box>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

const HeroContainer = styled(Box)`
  height: 100%;
  display: flex;
  width: 100%;
  padding-bottom: 5rem;
`;

const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export default App;
