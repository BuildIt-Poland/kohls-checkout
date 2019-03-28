import React from 'react';
import styled from 'styled-components';
import { colorBlack } from '../../styles/designTokens';

export const RegularPrice = styled.p`
  font-size: 1.5rem;
  color: ${colorBlack};
  margin: 0.2rem 0;
`;

function Price(props) {
  return <RegularPrice>Regular ${props.price}</RegularPrice>;
}

export default Price;
