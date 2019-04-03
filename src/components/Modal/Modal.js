import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import Content from './Content';
import Overlay from './Overlay';
import Header from './Header';
import CloseModal from './CloseModal';
import Body from './Body';

function Modal({ children, onClose = noop, title = 'Modal' }) {
  return (
    <>
      <Overlay onClick={onClose} />
      <Content>
        <Header data-testid="modal-header">
          {title}
          <CloseModal onClick={onClose}>X</CloseModal>
        </Header>
        <Body data-testid="modal-body">{children}</Body>
      </Content>
    </>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string
};

export default Modal;