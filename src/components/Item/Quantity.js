import React from 'react';
import styled from 'styled-components';
import noop from 'lodash.noop';

import { borderRadiusMedium, colorLightGrey, borderWidthThick } from '../../styles/designTokens';
import QuantityButton from './QuantityButton';
import QuantityInput from './QuantityInput';

const Wrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  border-radius: ${borderRadiusMedium};
  width: 15rem;
  border: ${borderWidthThick} solid ${colorLightGrey};
`;

function Quantity({
  cartItemId,
  currentQuantity,
  handleIncreaseItemQuantity = noop,
  handleDecreaseItemQuantity = noop,
  handleUpdateItemQuantity = noop
}) {
  const handleChange = (value, itemId) => handleUpdateItemQuantity(itemId, parseInt(value, 10));

  return (
    <Wrapper>
      <QuantityButton onClick={() => handleDecreaseItemQuantity(cartItemId)} disabled={currentQuantity < 2}>
        -
      </QuantityButton>
      <QuantityInput value={currentQuantity} onChange={e => handleChange(e.target.value, cartItemId)} />
      <QuantityButton onClick={() => handleIncreaseItemQuantity(cartItemId)}>+</QuantityButton>
    </Wrapper>
  );
}

export default Quantity;
