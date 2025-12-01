import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { useAuth } from '../components/AuthProvider';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {token, setToken} = useAuth();

  const handleSubmit = async() => {
    console.log(email);
    console.log(password);

    const response = await fetch("http://localhost:6868/user/sign-in", {
      method:"POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json();
    setToken(data.token);
    console.log(data);
  } 

  useEffect(() => {
      console.log(token)
    }, [token]);

  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh", }}>
      <form action={handleSubmit}>
      <Box sx={{display:"flex", flexDirection:"column", gap:"0.4rem", width:"fit-content", }} >
      <Typography textAlign="center">Login here</Typography>
      <TextField name="email" id="outlined-basic" label="Email" variant="outlined" onChange={e=>setEmail(e.target.value)} />
      <TextField name="password" id="outlined-basic" label="Password" variant="outlined" type="password" onChange={e=>setPassword(e.target.value)}  />
      <Button type="submit" variant="contained">Login</Button>
      <Typography textAlign="center">Did you want to <Link to="/register">register</Link> instead?</Typography>
      </Box>
      </form>
    </Box>
  )
}
