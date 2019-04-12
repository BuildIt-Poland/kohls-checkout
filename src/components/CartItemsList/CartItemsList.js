import React from 'react';
import PropTypes from 'prop-types';

import { item } from '../../types';
import ErrorBoundary from '../ErrorBoundary';
import Item from '../Item';
import CartItemControls from '../CartItemControls';
import List from './List';
import NoItemsMessage from './NoItemsMessage';

function CartItemsList({ items }) {
  // TODO Handle loding state in first check @blurbyte
  if (!items) {
    return null;
  }
  if (items && !items.length) {
    return <NoItemsMessage>There are no items in your cart.</NoItemsMessage>;
  }
  return (
    <ErrorBoundary>
      <List>
        {items.map(item => (
          <Item key={item.id} item={item} itemControls={CartItemControls} />
        ))}
      </List>
    </ErrorBoundary>
  );
}

CartItemsList.propTypes = {
  items: PropTypes.arrayOf(item)
};

export default CartItemsList;
