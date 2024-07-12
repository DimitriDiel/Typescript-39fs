import { useState } from "react";

import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";

import { PageWrapper, ButtonControl } from "./styles";

function Consultation_03() {
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setisModalOpen(true);
  };
  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <PageWrapper>
      <ButtonControl>
        <Button name="Open Modal" onClick={openModal} />
      </ButtonControl>
      <Modal open={isModalOpen} onClose={closeModal}>
        <p>Conformation modal</p>
      </Modal>
    </PageWrapper>
  );
}

export default Consultation_03;
