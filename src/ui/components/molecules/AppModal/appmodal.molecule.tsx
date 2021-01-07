import React from "react";
import { Modal, TextLg, TextSm, ModalBody } from "./appmodal.styles";
import AppImage from "../../atoms/AppImage/appimage.atom";
import IModalProps from "./appmodal.interfaces";

const AppModal: React.FC<IModalProps> = ({ config }) => {
  const {
    modalClassName,
    handleModal,
    modalIsOpen,
    modalToggle,
  } = config;

  return (
    <Modal isOpen={modalIsOpen} toggle={modalToggle} className={modalClassName}>
      <ModalBody>
        <AppImage
          config={{ imageSrc: handleModal.modalImage, imageClassName: "modal-img" }}
        />
        <TextLg>{handleModal.modalTitle}</TextLg>
        <TextSm>{handleModal.modalDescription}</TextSm>
      </ModalBody>
    </Modal>
  );
};

export default AppModal;
