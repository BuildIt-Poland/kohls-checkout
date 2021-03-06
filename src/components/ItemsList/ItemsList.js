import React from 'react';
import PropTypes from 'prop-types';

import { item } from '../../types';
import ErrorBoundary from '../ErrorBoundary';
import ShippingDetails from '../ShippingDetails';
import Item from '../Item';
import Content from '../Content';
import Wrapper from './Wrapper';
import List from './List';

function ItemsList({ items }) {
  return (
    <ErrorBoundary>
      <Wrapper>
        <List as="ul">
          {items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </List>
        <Content>
          <ShippingDetails />
        </Content>
      </Wrapper>
    </ErrorBoundary>
  );
}

ItemsList.propTypes = {
  /** Array of cart items */
  items: PropTypes.arrayOf(item)
};

export default ItemsList;
