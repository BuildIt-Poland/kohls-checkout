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
  height: 4.4rem;
`;

function Quantity({ quantity }) {
  return (
    <Wrapper>
      <QuantityButton disabled>-</QuantityButton>
      <QuantityInput value={quantity} />
      <QuantityButton>+</QuantityButton>
    </Wrapper>
  );
}

export default Quantity;
