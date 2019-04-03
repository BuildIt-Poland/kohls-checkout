import React, { useState } from 'react';
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

function Quantity({ cartItemId, currentQuantity, handleUpdate }) {
  const [quantityInput, setQuantityInput] = useState(currentQuantity);

  const updateQuantity = function(type) {
    console.log('updateQuantity called');
    const newValue = type === 'up' ? quantityInput + 1 : quantityInput - 1;
    handleChange(newValue);
  };

  const handleChange = function(value) {
    const newValue = parseInt(value, 10);
    setQuantityInput(newValue);
    handleUpdate(cartItemId, newValue);
  };

  return (
    <Wrapper>
      <QuantityButton onClick={() => updateQuantity('down')} disabled={quantityInput < 2}>
        -
      </QuantityButton>
      <QuantityInput value={quantityInput} onChange={e => handleChange(e.target.value)} />
      <QuantityButton onClick={() => updateQuantity('up')}>+</QuantityButton>
    </Wrapper>
  );
}

export default Quantity;
