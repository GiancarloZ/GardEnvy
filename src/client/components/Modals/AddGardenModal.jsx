import React from "react";
import createGarden from "@wasp/actions/createGarden";
import { Camera } from "@emotion-icons/ionicons-outline";

// Components
import { FormInput, FormTextArea } from "../Form";
import Button from "../Button";
import { CameraModal } from "./index";
import Toast from "../Toast";

// Styled
import {
  ModalScaleContainer,
  ModalBackground,
  Modal,
  Label,
  ButtonWrapper,
  IconWrapper,
  PhotoWrapper,
  ImageWrapper,
} from "./styled";

export const AddGardenModal = ({ open, closeModal }) => {
  const [name, setName] = React.useState();
  const [mounted, setMounted] = React.useState(false);
  const [openCamera, setOpenCamera] = React.useState(false);
  const [image, setImage] = React.useState();
  const toastRef = React.useRef(null);

  const handleCreate = async (e) => {
    e.preventDefault();
    await createGarden({ name: name })
      .then((res) => {
        console.log(res, "res");
      })
      .catch((e) => {
        toastRef.current.sendMessage({ message: e.message, status: "error" });
      });
  };

  React.useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      setTimeout(() => {
        setMounted(false);
      }, 500);
    }
  }, [open]);

  return (
    <>
      <ModalScaleContainer open={open} mounted={mounted}>
        <ModalBackground
          onClick={(e) => e.stopPropagation()}
          ta="center"
          bg="transparent"
        >
          <Modal>
            <Label>Create Garden</Label>
            <form>
              <FormInput
                label="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <PhotoWrapper>
                {image && (
                  <>
                    <ImageWrapper>
                      <img src={image} />
                    </ImageWrapper>
                  </>
                )}
                <IconWrapper
                  type="button"
                  onClick={() => setOpenCamera((o) => !o)}
                >
                  Take Photo <Camera size={24} />
                </IconWrapper>
              </PhotoWrapper>
            </form>
            <ButtonWrapper>
              <Button type="button" onClick={closeModal}>
                Cancel
              </Button>
              <Button color="active" onClick={handleCreate}>
                Create
              </Button>
            </ButtonWrapper>
          </Modal>
        </ModalBackground>
      </ModalScaleContainer>
      <Toast ref={toastRef} />
      <CameraModal
        open={openCamera}
        closeCamera={() => setOpenCamera(false)}
        image={image}
        setImage={setImage}
      />
    </>
  );
};
