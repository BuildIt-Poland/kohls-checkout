import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InfoCircle } from '../Icons';
import Hitbox from '../Hitbox';
import Modal from '../Modal';
import Text from '../Text';

function ModalTrigger({ title, content }) {
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
    <span>
      <Hitbox aria-label={`Show ${title} help`} onClick={toggleModal} data-testid="modal-trigger">
        <InfoCircle />
      </Hitbox>
      {renderModal()}
    </span>
  );
}

ModalTrigger.propTypes = {
  /** Title displayed in Modal header */
  title: PropTypes.string.isRequired,
  /** Content displayed in Modal body */
  content: PropTypes.string.isRequired
};

export default ModalTrigger;
