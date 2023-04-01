import React, { useState } from "react";
import styled from "@emotion/styled";
import logout from "@wasp/auth/logout.js";
import useAuth from "@wasp/auth/useAuth.js";
import { Link } from "react-router-dom";
import { Flower, Person, Menu, Close } from "@emotion-icons/ionicons-outline";
import { Person as FilledPerson } from "@emotion-icons/ionicons-solid";

// Components
import { NavMenu } from "../Modals/NavMenu";
import Dropdown from "../Dropdown";

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
  const [profileMenu, setProfileMenu] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [mountedTwo, setMountedTwo] = React.useState(false);

  console.log(user, "menu");

  React.useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      setTimeout(() => {
        setMounted(false);
      }, 500);
    }
  }, [open]);
  React.useEffect(() => {
    if (profileMenu) {
      setMountedTwo(true);
    } else {
      setTimeout(() => {
        setMountedTwo(false);
      }, 500);
    }
  }, [profileMenu]);
  return (
    <>
      <Wrapper>
        <NavStartWrapper onClick={() => setOpen((o) => !o)}>
          {open ? <Close size={32} /> : <Menu size={32} />}
        </NavStartWrapper>
        <Link to="/">
          <Flower size={24} />
        </Link>
        <NavEndWrapper onClick={() => setProfileMenu((p) => !p)}>
          {user ? <FilledPerson size={24} /> : <Person size={24} />}
          {/* {user ? (
            <Button type="button" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Link to="/signup">Login/SignUp</Link>
          )} */}
        </NavEndWrapper>
      </Wrapper>
      <Dropdown open={profileMenu} user={user} mounted={mountedTwo} />

      <NavMenu
        open={open}
        closeModal={() => setOpen((o) => !o)}
        mounted={mounted}
      />
    </>
  );
}
