import { Box, Button, styled } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router";
import { useToken } from "./AuthProvider";
import { authClient } from "../utils/auth-client";
import { useAuthentication } from "../hooks/useAuthentication";

export const Header = () => {
  const { logOut } = useAuthentication();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logOut();
    if(success) {
      navigate("/");
      window.location.reload();
    }
  };
  const { token } = useToken();
  return (
    <HeaderMain>
      <StyledLink to="/">
        <Box>genZineers</Box>
      </StyledLink>
      <HeaderButtonGroup>
        <StyledLink to="/courses">
          <HeaderButton>Courses</HeaderButton>
        </StyledLink>
        <StyledLink to="/about">
          <HeaderButton>About</HeaderButton>
        </StyledLink>
      </HeaderButtonGroup>

      <StyledLink to="/register">
        {!token && <Box>Register</Box>}
        {token && <Box>Maki</Box>}
      </StyledLink>
      {token && <Button onClick={() => handleLogout()}>Log out</Button>}
    </HeaderMain>
  );
};

export const HeaderMain = styled(Box)`
  display: flex;
  width: 100%;
  background-color: rgba(18, 18, 18, 0.8);
  justify-content: space-between;
  padding: 1.1rem 1.825rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const HeaderButton = styled(Box)`
  padding: 0 1rem;
`;

export const HeaderButtonGroup = styled(Box)`
  display: flex;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
