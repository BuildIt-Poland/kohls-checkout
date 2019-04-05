import React from 'react';
import styled from 'styled-components';

import { spacingSmall } from '../../styles/designTokens';
import Item from '../Item';

const Wrapper = styled.div`
  margin: ${spacingSmall} 0;
`;

function ItemsList({ items = [] }) {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Item key={index} item={item} editableQuantity itemId={item.id} />
      ))}
    </Wrapper>
  );
}

export default ItemsList;
