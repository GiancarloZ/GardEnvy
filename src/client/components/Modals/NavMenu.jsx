import React from "react";

// Styled
import { ModalSlideContainer, ModalBackground, Modal } from "./styled";

export function NavMenu({ open, closeModal, mounted }) {
  console.log(open, "openNav");
  return (
    <ModalSlideContainer open={open} mounted={mounted}>
      <ModalBackground
        onClick={(e) => e.stopPropagation()}
        bg="#237d09"
        open={open}
      >
        <Modal open={open}>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </ModalBackground>
    </ModalSlideContainer>
  );
}
