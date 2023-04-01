import React from "react";
import styled from "@emotion/styled";

// Styled
const Wrapper = styled.button`
  padding: 12px 24px 12px 24px;
  background: ${({ active }) => (active ? "#1e960b" : "#616B43")};
  border-radius: 12px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.025em;
  border: 4px solid ${({ active }) => (active ? "#1e960b" : "#616B43")};
  &:hover {
    border: 4px solid ${({ active }) => (active ? "#1e960b" : "#616B43")};
    transform: scale(0.9);
  }

  &:active {
    border: 4px solid ${({ active }) => (active ? " #1e960b" : "#616B43")};
  }

  &:focus {
    outline: none !important;
    border: 4px solid ${({ active }) => (active ? " #1e960b" : "#616B43")};
  }
`;

export default function Button({
  type = "button",
  onClick,
  children,
  ...props
}) {
  return (
    <Wrapper onClick={onClick} {...props}>
      {children}
    </Wrapper>
  );
}
