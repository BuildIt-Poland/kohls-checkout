import React from 'react';
import styled from 'styled-components';

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

function Quantity({ cartItemId, currentQuantity, handleIncrease, handleDecrease, handleUpdate }) {
  const handleChange = function(value, itemId) {
    const newValue = parseInt(value, 10);
    handleUpdate(itemId, newValue);
  };

  return (
    <Wrapper>
      <QuantityButton onClick={() => handleDecrease(cartItemId)} disabled={currentQuantity < 2}>
        -
      </QuantityButton>
      <QuantityInput value={currentQuantity} onChange={e => handleChange(e.target.value, cartItemId)} />
      <QuantityButton onClick={() => handleIncrease(cartItemId)}>+</QuantityButton>
    </Wrapper>
  );
}

export default Quantity;
