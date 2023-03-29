import React from "react";
import { Add } from "@emotion-icons/ionicons-outline";

// Styled
import { FloatingButtonWrapper } from "./styled";

export function FloatingAddGarden({ onClick }) {
  return (
    <FloatingButtonWrapper onClick={onClick}>
      <Add />
    </FloatingButtonWrapper>
  );
}
