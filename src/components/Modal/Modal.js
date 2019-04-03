import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import ModalContent from './ModalContent';
import ModalWrapper from './ModalWrapper';
import ModalHeader from './ModalHeader';
import CloseModal from './CloseModal';
import ModalBody from './ModalBody';

function Modal({ children, onClose = noop, title = 'Modal' }) {
  return (
    <>
      <ModalWrapper onClick={onClose} />
      <ModalContent>
        <ModalHeader data-testid="modal-header">
          {title}
          <CloseModal onClick={onClose}>X</CloseModal>
        </ModalHeader>
        <ModalBody data-testid="modal-body">{children}</ModalBody>
      </ModalContent>
    </>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string
};

export default Modal;
