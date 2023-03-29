import React from "react";
import styled from "@emotion/styled";
import { Header } from "./components/Header";
import { MainMenu } from "./components/MainMenu";
import "./root.css";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: #e2b411;

  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

  * {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    font-weight: 500;
  }

  html,
  body {
    background: #e2b411;
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
    background-color: #333333;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e2b411;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #e2b411;
  }
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
    <Wrapper>
      <Header />
      <FlexWrapper>
        <MainMenu />
        <ContentContainer>{children}</ContentContainer>
      </FlexWrapper>
    </Wrapper>
  );
}
