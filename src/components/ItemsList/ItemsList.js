import React from 'react';
import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';
import Item from '../Item/Item';

const Wrapper = styled.div`
  margin: ${spacingMedium} 0;
`;

function ItemsList({ items, handleUpdate, handleRemove }) {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          itemId={index}
          editableQuantity
          handleUpdate={handleUpdate}
          handleRemove={handleRemove}
        />
      ))}
    </Wrapper>
  );
}

export default ItemsList;
