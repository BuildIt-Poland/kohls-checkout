import React from 'react';
import styled from 'styled-components';
import { colorRed } from '../../styles/designTokens';
import { RegularPrice } from './Price';

const Wrapper = styled(RegularPrice)`
  text-transform: uppercase;
  color: ${colorRed};
  font-weight: bold;
`;

function DiscountPrice(props) {
  return <Wrapper>Sale ${props.price}</Wrapper>;
}

export default DiscountPrice;
