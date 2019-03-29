import React from 'react';
import styled from 'styled-components';

import { borderRadiusMedium, colorLightGrey, spacingLarge, borderWidthThick } from '../../styles/designTokens';
import QuantityButton from './QuantityButton';
import QuantityInput from './QuantityInput';

const Wrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  justify-items: center;
  border-radius: ${borderRadiusMedium};
  grid-template-columns: ${spacingLarge} auto ${spacingLarge};
  width: 40%;
  border: ${borderWidthThick} solid ${colorLightGrey};
  height: 4.4rem;
`;

function Quantity() {
  return (
    <Wrapper>
      <QuantityButton disabled>-</QuantityButton>
      <QuantityInput />
      <QuantityButton>+</QuantityButton>
    </Wrapper>
  );
}

export default Quantity;
