import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Box, Button, Link, TextField, Typography } from "@mui/material";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async() => {
    console.log(email);
    console.log(password);

    const response = await fetch("http://localhost:6868/user/sign-up", {
      method:"POST",
      body: JSON.stringify({ fullName: fullName, email: email, password: password }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    console.log(response);
  } 

  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh", }}>
      <form action={handleSubmit}>
      <Box sx={{display:"flex", flexDirection:"column", gap:"0.4rem", width:"fit-content", }} >
      <Typography textAlign="center">Register here</Typography>
      <TextField name="fullName" id="outlined-basic" label="Full Name" variant="outlined" onChange={e=>setFullName(e.target.value)} />
      <TextField name="email" id="outlined-basic" label="Email" variant="outlined" onChange={e=>setEmail(e.target.value)} />
      <TextField name="password" id="outlined-basic" label="Password" variant="outlined" type="password" onChange={e=>setPassword(e.target.value)}  />
      <Button type="submit" variant="contained">Register</Button>
      <Typography textAlign="center">Did you want to <Link>log in</Link> instead?</Typography>
      </Box>
      </form>
    </Box>
  );
}

export default App;
