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
  currentQuantity,
  handleIncreaseItemQuantity = noop,
  handleDecreaseItemQuantity = noop,
  handleSetItemQuantity = noop
}) {
  const handleChange = e => {
    handleSetItemQuantity(parseInt(e.target.value, 10));
  };

  return (
    <Wrapper>
      <QuantityButton onClick={handleDecreaseItemQuantity} disabled={currentQuantity < 2}>
        -
      </QuantityButton>
      <QuantityInput value={currentQuantity} onChange={handleChange} />
      <QuantityButton onClick={handleIncreaseItemQuantity}>+</QuantityButton>
    </Wrapper>
  );
}

export default Quantity;
