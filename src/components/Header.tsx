import { Box, Button, styled } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router";
import { useToken } from "./AuthProvider";
import { useAuthentication } from "../hooks/useAuthentication";

export const Header = () => {
  const { logOut } = useAuthentication();
  const { isLoggedIn } = useToken();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logOut();
    if (success) {
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
      {!isLoggedIn && (
        <StyledLink to="/register">Register</StyledLink>
      )}
      {isLoggedIn && (
        <Box>Maki</Box>
      )}

      {/* <StyledLink to="/register"> */}
        {/* {!isLoggedIn && <Box>Register</Box>} */}
        {/* {isLoggedIn && <Box>Maki</Box>} */}
      {/* </StyledLink> */}
      {/* {isLoggedIn && <Button onClick={() => handleLogout()}>Log out</Button>} */}
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
  position: sticky;
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
