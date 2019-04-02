import React from 'react';
import PropTypes from 'prop-types';

import ModalContent from './ModalContent';
import ModalWrapper from './ModalWrapper';
import ModalHeader from './ModalHeader';
import CloseModal from './CloseModal';
import ModalBody from './ModalBody';

function Modal({ children, onClose, title }) {
  return (
    <>
      <ModalWrapper onClick={onClose} />
      <ModalContent>
        <ModalHeader>
          {title}
          <CloseModal onClick={onClose}>X</CloseModal>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func
};

export default Modal;
