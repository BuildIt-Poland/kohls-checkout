import React from 'react';
import styled from 'styled-components';
import QuantityButton from './QuantityButtons';
import { borderRadiusMedium, colorLightGrey } from '../../styles/designTokens';
import QuantityInput from './QuantityInput';

const Wrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  border-radius: ${borderRadiusMedium};
  grid-template-columns: 3em auto 3em;
  width: 40%;
  border: 0.2rem solid ${colorLightGrey};
  height: 4.4rem;
`;

function ItemQuantity() {
  return (
    <Wrapper>
      <QuantityButton disabled>-</QuantityButton>
      <QuantityInput value="1" />
      <QuantityButton>+</QuantityButton>
    </Wrapper>
  );
}

export default ItemQuantity;
