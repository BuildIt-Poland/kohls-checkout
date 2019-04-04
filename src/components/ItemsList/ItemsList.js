import React from 'react';
import styled from 'styled-components';
import noop from 'lodash.noop';

import { spacingSmall } from '../../styles/designTokens';
import Item from '../Item/Item';

const Wrapper = styled.div`
  margin: ${spacingSmall} 0;
`;

function ItemsList({
  items = [],
  handleRemoveItem = noop,
  handleUpdateItemQuantity = noop,
  handleIncreaseItemQuantity = noop,
  handleDecreaseItemQuantity = noop
}) {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          editableQuantity
          handleUpdateItemQuantity={handleUpdateItemQuantity}
          handleIncreaseItemQuantity={handleIncreaseItemQuantity}
          handleDecreaseItemQuantity={handleDecreaseItemQuantity}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </Wrapper>
  );
}

export default ItemsList;
