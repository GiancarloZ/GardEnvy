import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

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
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0%);
  }
`;

const scaleDown = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(110vh);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);

  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const ModalScaleContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  top: 72px;
  z-index: 1;
  transform: translateY(110vh);
  animation: ${(props) => props.mounted && (props.open ? scaleUp : scaleDown)}
    0.5s cubic-bezier(0.1, 0.25, 0.25, 1) forwards;
`;

export const ModalSlideContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 228px;
  top: 0;
  left: 0;
  z-index: 201;
  transform: translateX(-100%);
  animation: ${(props) => props.mounted && (props.open ? slideIn : slideOut)}
    0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`;

export const ModalCameraContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateX(-100%);
  opacity: 1;
  animation: ${(props) => props.mounted && (props.open ? slideIn : slideOut)}
    0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`;

export const ModalBackground = styled.div`
  background: ${({ bg }) => bg || "#e2b411"};
  padding: ${({ padding }) => padding};
  vertical-align: ${({ align }) => align || "middle"};
  text-align: ${({ ta }) => ta};
  position: relative;
  height: 100%;

  @media (min-width: 786px) {
    padding: ${({ paddingM }) => paddingM};
  }
`;

export const Modal = styled.div`
  background: #e2b411;
  max-width: 350px;
  border-radius: 3px;
  font-weight: 300;
  position: relative;
  padding: 12px;
  margin-top: 72px;
  margin: auto;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const NavItem = styled(Link)`
  padding: 12px;
  &:hover {
    background: #7b9600;
  }
  text-decoration: none;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  text-align: center;
  font-size: 24px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  border: 1px solid #ffffff;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const ImageWrapper = styled.div`
  padding-bottom: 177.778%;
  width: 100%;
`;
