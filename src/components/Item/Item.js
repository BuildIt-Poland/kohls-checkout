// Displays product image, name, prices and variants
// Used in cart and checkout
// Injects props to optional ItemControls component

import React from 'react';
import PropTypes from 'prop-types';

import { item } from '../../types';
import ListItem from './ListItem';
import Layout from './Layout';
import Thumbnail from './Thumbnail';
import Name from './Name';
import Variants from './Variants';
import Prices from './Prices';

function Item({ itemControlsComponent: ItemControls, item }) {
  const { name, imgUrl, variants, price, quantity } = item;
  return (
    <ListItem data-testid="list-item">
      <Layout>
        <Thumbnail src={imgUrl} alt={name} />
        <section>
          <Name>{name}</Name>
          <Variants variants={variants} />
          <Prices price={price} quantity={quantity} />
        </section>
      </Layout>
      {ItemControls && <ItemControls {...item} />}
    </ListItem>
  );
}

Item.propTypes = {
  /** Object containing single Cart Item data */
  item: item,
  /** Component class that handle Item state manipulation */
  itemControlsComponent: PropTypes.func
};

export default Item;
