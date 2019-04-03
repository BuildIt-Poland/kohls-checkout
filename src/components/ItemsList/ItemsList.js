import React from 'react';
import styled from 'styled-components';

import { spacingSmall } from '../../styles/designTokens';
import Item from '../Item/Item';

const Wrapper = styled.div`
  margin: ${spacingSmall} 0;
`;

function ItemsList({ items, handleUpdate, handleRemove, handleIncrease, handleDecrease }) {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          editableQuantity
          handleUpdate={handleUpdate}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleRemove={handleRemove}
        />
      ))}
    </Wrapper>
  );
}

export default ItemsList;
