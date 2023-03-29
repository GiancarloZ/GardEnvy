import React, { useState } from "react";
import styled from "@emotion/styled";
import logout from "@wasp/auth/logout.js";
import useAuth from "@wasp/auth/useAuth.js";
import { Link } from "react-router-dom";
import { Flower, Person, Menu } from "@emotion-icons/ionicons-outline";

// Components
import { NavMenu } from "../Modals/NavMenu";

// Styled
import {
  Wrapper,
  NavStartWrapper,
  Button,
  // Logo,
  // LogoMobile,
  NavEndWrapper,
  NavIconWrapper,
  NavStartMenuIcon,
  NavEndCartIconWrapper,
  NavEndCartIcon,
  LoginLink,
  NavEndUserIconWrapper,
  NavEndUserIcon,
} from "./styled";

export function Header() {
  const { data: user } = useAuth();
  const [open, setOpen] = React.useState(false);

  console.log(user, "user");
  return (
    <>
      <Wrapper>
        <NavStartWrapper onClick={() => setOpen((o) => !o)}>
          <Menu size={24} />
        </NavStartWrapper>
        <Link to="/">
          <Flower size={24} />
        </Link>
        <NavEndWrapper>
          <Person size={24} />
          {/* {user ? (
            <Button type="button" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Link to="/signup">Login/SignUp</Link>
          )} */}
        </NavEndWrapper>
      </Wrapper>
      <NavMenu open={open} closeModal={() => setOpen((o) => !o)} />
    </>
  );
}
