import React from 'react';
import styled from 'styled-components';
import ItemQuantity from './ItemQuantity';

const Wrapper = styled.div`
  display: grid;
  margin: 4em 0;
`;

function Item() {
  return (
    <Wrapper>
      <ItemQuantity />
    </Wrapper>
  );
}

export default Item;
