import React, { useState, useRef, useEffect } from "react";
import { Camera } from "react-camera-pro";
import styled from "@emotion/styled";
import Button from "../Button";

const Wrapper = styled.div`
  position: fixed:
  width: 100vw;
  height: 100vh;
  background: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 60px;
`;

const CameraWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 350px;
  height: 350px;
  max-width: 100vw;
`;

const ActionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  position: absolute;
  bottom: 12px;
  left: 0;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

import { ModalCameraContainer } from "./styled";

export function CameraModal({ open, closeCamera, image, setImage }) {
  const cameraRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  console.log(open, "camera");

  useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      setTimeout(() => {
        setMounted(false);
      }, 500);
    }
  }, [open]);
  return (
    <ModalCameraContainer open={open} mounted={mounted}>
      <Wrapper bg="">
        <CameraWrapper>
          <Camera
            ref={cameraRef}
            aspectRatio={9 / 16}
            facingMode="environment"
          />
          {image && <img src={image} alt="Taken photo" />}
        </CameraWrapper>
        <ActionWrapper>
          <Button type="button" onClick={closeCamera}>
            Close
          </Button>
          <Button
            type="button"
            onClick={() => setImage(cameraRef.current.takePhoto())}
            active
          >
            Take photo
          </Button>
        </ActionWrapper>
      </Wrapper>
    </ModalCameraContainer>
  );
}
