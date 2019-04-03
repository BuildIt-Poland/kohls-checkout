import React from 'react';
import styled from 'styled-components';

import { colorBlack, fontSmall } from '../../styles/designTokens';

const Wrapper = styled.button`
  border: 0;
  background: none;
  color: ${colorBlack};
  text-decoration: underline;
  font-size: ${fontSmall};
  grid-column-start: ${props => (props.editableQuantity ? 3 : 2)};
  text-align: ${props => (props.editableQuantity ? 'right' : 'left')};
  padding: 0;
`;

function RemoveButton({ editableQuantity, cartItemId, handleRemove }) {
  return (
    <Wrapper editableQuantity={editableQuantity} onClick={() => handleRemove(cartItemId)}>
      Remove
    </Wrapper>
  );
}

export default RemoveButton;
