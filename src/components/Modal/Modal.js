import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import { Cross } from '../Icons';
import Wrapper from './Wrapper';
import Overlay from './Overlay';
import Header from './Header';
import CloseButton from './CloseButton';
import Body from './Body';

function Modal({ children, onClose = noop, title = 'Modal' }) {
  return (
    <>
      <Overlay onClick={onClose} />
      <Wrapper role="dialog" aria-labelledby="dialog-label" aria-modal="true">
        <Header id="dialog-label" data-testid="modal-header">
          {title}
          <CloseButton aria-label="close" onClick={onClose}>
            <Cross />
          </CloseButton>
        </Header>
        <Body data-testid="modal-body">{children}</Body>
      </Wrapper>
    </>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string
};

export default Modal;
