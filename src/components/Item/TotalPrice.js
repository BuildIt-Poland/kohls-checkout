import React from 'react';
import styled from 'styled-components';
import { RegularPrice } from './Price';

const Wrapper = styled(RegularPrice)`
  font-weight: bold;
`;

function TotalPrice(props) {
  return <Wrapper>Total ${props.price}</Wrapper>;
}

export default TotalPrice;
