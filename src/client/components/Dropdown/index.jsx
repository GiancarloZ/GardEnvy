import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import logout from "@wasp/auth/logout";

const fadeIn = keyframes`
  0% {
    transform: translateY(-100%);
    box-shadow: 0;
  }
  100% {
    transform: translateY(0%);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0), 0 6px 6px rgba(0, 0, 0, 0.1);
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translateY(0%);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0), 0 6px 6px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: translateY(-100%);
    box-shadow: 0;
  }
`;

const DropdownWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style: none;
  width: 200px;
  transform: translateY(-100%);
  background: #939600;
  color: white;
  padding-top: 3.9em;
  top: 60px;
  right: 24px;
  margin: 0;
  padding: 0;
  z-index: 201;
  box-shadow: 0;
  animation: ${({ open, mounted }) => mounted && (open ? fadeIn : fadeOut)} 1.5s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  a {
    text-decoration: none;
  }
`;

const MenuItem = styled(Link)`
  padding: 12px;
  &:hover {
    background: #7b9600;
  }
`;
const MenuButton = styled.button`
  background: transparent;
  border: 0;
  margin: 0;
  padding: 12px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #7b9600;
  }
`;

export default function Dropdown({ open, user }) {
  const [mounted, setMounted] = React.useState(false);
  console.log(user, "soeauwn");
  React.useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      setTimeout(() => {
        setMounted(false);
      }, 500);
    }
  }, [open]);
  return (
    <DropdownWrapper open={open} mounted={mounted}>
      {user?.id ? (
        <>
          <MenuItem to="/profile">Profile</MenuItem>
          <MenuButton type="submit" onClick={logout}>
            Logout
          </MenuButton>
        </>
      ) : (
        <>
          <MenuItem to="/login">Login</MenuItem>
          <MenuItem to="/signup">Signup</MenuItem>
        </>
      )}
    </DropdownWrapper>
  );
}
