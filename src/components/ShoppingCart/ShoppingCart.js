import React from 'react';
import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';
import ItemsList from '../ItemsList';
import Item from '../Item';

const Wrapper = styled.div`
  padding-left: ${spacingMedium};
  padding-right: ${spacingMedium};
`;

function ShoppingCart() {
  return (
    <>
      {/* <SectionHeader title="Shopping Cart"> </SectionHeader> */}
      <Wrapper>
        <ItemsList>
          <Item />
          <Item editableQuantity />
        </ItemsList>
      </Wrapper>
    </>
  );
}

export default ShoppingCart;
