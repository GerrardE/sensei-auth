interface IModalProps {
  config: {
    modalClassName?: string,
    handleModal: {
      modalImage: string,
      modalDescription: string,
      modalTitle: string,
    }
    modalIsOpen: boolean,
    modalToggle: () => void,
  },
}

export default IModalProps;
