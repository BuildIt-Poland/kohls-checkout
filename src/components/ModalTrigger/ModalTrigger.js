import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InfoCircle } from '../Icons';
import Modal from '../Modal/Modal';
import Text from '../Text/Text';

function ModalTrigger({ title, content, children }) {
  const [isOpen, setModalVisibility] = useState(false);

  const toggleModal = () => setModalVisibility(!isOpen);

  const renderModal = () => {
    if (isOpen) {
      return (
        <Modal title={title} onClose={toggleModal}>
          <Text>{content}</Text>
        </Modal>
      );
    }

    return null;
  };

  return (
    <>
      <button onClick={toggleModal} data-testid="modal-trigger">
        <InfoCircle />
      </button>
      {renderModal()}
    </>
  );
}

ModalTrigger.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default ModalTrigger;
