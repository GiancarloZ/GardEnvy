import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const ToastSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  10% {
    opacity: 0.5;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  }
  90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;
const ToastSlideOut = keyframes`
  0% {
    transform: translateY(-100%);
  }
  10% {
    transform: translateY(0);
  }
  90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;
const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
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

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 15px;
  z-index: 999;
  transform: translateX(0%);
  opacity: 1;
  animation: ${(props) => (props.mounted && props.open ? slideIn : slideOut)}
    1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`;

const ToastContainer = styled.div`
  background-color: ${({ status }) =>
    status === "error" ? "rgb(145, 0, 72)" : "#1E960B"};
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
`;

const Toast = forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState("");
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    open && setTimeout(() => setOpen(false), 3000);
  }, [open]);

  useImperativeHandle(ref, () => ({
    sendMessage: ({ message, status }) => {
      setDetails(message);
      setStatus(status);
      setOpen(true);
    },
  }));
  return (
    <ToastWrapper open={open}>
      <ToastContainer status={status}>{details}</ToastContainer>
    </ToastWrapper>
  );
});

export default Toast;
