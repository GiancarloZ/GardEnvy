import React from "react";
import { Global, css } from "@emotion/react";
import { theme } from "./theme";

const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

  * {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    font-weight: 500;
  }

  html,
  body {
    background: ${theme.colors.base1};
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: white;
  }

  #app {
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
    background-color: ${theme.colors.base1};
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.accent};
  }
`;

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
