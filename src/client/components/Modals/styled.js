import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const fadeOut = keyframes`
  0% {
    background: rgba(0, 0, 0, 0.7);
  }
  100% {
    background: rgba(0, 0, 0, 0);
  }
`;

const scaleUp = keyframes`
  0% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
  100% {
    transform:scale(1) translateY(0px);
    opacity:1;
  }
`;

const scaleDown = keyframes`
  0% {
    transform:scale(1) translateY(0px);
    opacity:1;
  }
  100% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

/* Define keyframes for the slideOut animation */
const slideOut = keyframes`
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const ModalScaleContainer = styled.div`
  position: fixed;
  display: table;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  transform: scale(0.5);
  opacity: 0;
  animation: ${(props) => props.mounted && (props.open ? scaleUp : scaleDown)}
    0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

export const ModalSlideContainer = styled.div`
  position: fixed;
  display: table;
  height: 100vh;
  width: 280px;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateX(0%);
  opacity: 1;
  animation: ${(props) => (props.open ? slideIn : slideOut)} 0.5s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

export const ModalBackground = styled.div`
  display: table-cell;
  background: ${({ bg }) => bg || "rgba(0, 0, 0, 0.8)"};
  text-align: center;
  vertical-align: middle;
`;

export const Modal = styled.div`
  background: #e2b411;
  padding: 50px;
  display: inline-block;
  border-radius: 3px;
  font-weight: 300;
  position: relative;
`;
