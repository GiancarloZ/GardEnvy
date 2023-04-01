import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

import { NotificationsProvider, setUpNotifications } from "reapop";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

// Components
import { Header } from "./components/Header";

// Styles
const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

  * {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    font-weight: 500;
  }

  html,
  body {
    background: ${theme.colors.base3};
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: white;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
    text-transform: uppercase;
  }

  a {
    color: white;
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.base3};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.base6};
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.base1};
  }
`;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const ContentContainer = styled.div`
  position: relative;
  transition: 0.5s;
  min-width: calc(100% - 228px);
  width: 100%;
  min-height: 100vh;
  padding-top: 60px;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

export default function Root({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      <Wrapper>
        <Header />
        <FlexWrapper>
          <ContentContainer>{children}</ContentContainer>
        </FlexWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}
