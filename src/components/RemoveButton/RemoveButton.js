import React from 'react';
import styled from 'styled-components';
import noop from 'lodash.noop';

import { colorBlack, fontSmall } from '../../styles/designTokens';

const Wrapper = styled.button`
  border: 0;
  background: none;
  color: ${colorBlack};
  text-decoration: underline;
  font-size: ${fontSmall};
  grid-column-start: ${({ editableQuantity }) => (editableQuantity ? 3 : 2)};
  text-align: ${({ editableQuantity }) => (editableQuantity ? 'right' : 'left')};
  padding: 0;
`;

function RemoveButton({ editableQuantity, handleClick = noop }) {
  return (
    <Wrapper editableQuantity={editableQuantity} onClick={handleClick}>
      Remove
    </Wrapper>
  );
}

export default RemoveButton;
