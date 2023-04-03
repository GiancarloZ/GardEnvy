import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const slideIn = keyframes`
  from {
    transform: translateY(110vh);
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
    transform: translateY(110vh);
    opacity: 0;
  }
`;
const toastIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(110vh) scale(0.5);
  }
  60% {
    opacity: 1;
    transform: translateY(50vh) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0%) scale(1);
  }
`;

const toastOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%) scale(1);
  }
  40% {
    opacity: 0.5;
    transform: translateY(50vh) scale(0.95);
  }
  100% {
    opacity: 0;
    transform: translateY(110vh) scale(0.5);
  }
`;

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  left: 15px;
  z-index: 999;
  transform: translateY(110vh);
  opacity: 0;
  animation: ${(props) => (props.mounted && props.open ? toastIn : toastOut)}
    0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
`;

const ToastContainer = styled.div`
  background-color: ${({ theme, status }) =>
    status === "error" ? "rgb(145, 0, 72)" : theme.colors.base1};
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
`;

const Toast = forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setMounted(true);
      setTimeout(() => setOpen(false), 3000);
    } else {
      setTimeout(() => {
        setMounted(false);
      }, 500);
    }
  }, [open]);

  useImperativeHandle(ref, () => ({
    sendMessage: ({ message, status }) => {
      setDetails(message);
      setStatus(status);
      setOpen(true);
    },
  }));
  return (
    <ToastWrapper open={open} mounted={mounted}>
      <ToastContainer status={status}>{details}</ToastContainer>
    </ToastWrapper>
  );
});

export default Toast;
