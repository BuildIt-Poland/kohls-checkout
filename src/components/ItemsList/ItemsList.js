import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item2';
import Text from '../Text';
import List from './List';

function ItemsList({ items }) {
  // TODO Handle loding state in first check @blurbyte
  if (!items) {
    return null;
  }
  if (items && !items.length) {
    return <Text>There are no items in your cart.</Text>;
  }
  return (
    <List>
      {items.map((item, index) => (
        <Item key={index} />
      ))}
    </List>
  );
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default ItemsList;
