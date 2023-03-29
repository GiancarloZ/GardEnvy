import React from "react";

// Components
import { FormInput } from "../Form";

// Styled
import { ModalScaleContainer, ModalBackground, Modal } from "./styled";

export const AddGardenModal = ({ open, closeModal, mounted }) => {
  return (
    <ModalScaleContainer open={open} mounted={mounted}>
      <ModalBackground onClick={(e) => e.stopPropagation()}>
        <Modal>
          <FormInput label="Name" />
          <button onClick={closeModal}>Close</button>
        </Modal>
      </ModalBackground>
    </ModalScaleContainer>
  );
};
