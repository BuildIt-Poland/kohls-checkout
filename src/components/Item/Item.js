// Displays product image, name, prices and variants
// Used in cart and checkout
// Injects props to optional ItemControls component

import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import Layout from './Layout';
import Thumbnail from './Thumbnail';
import Name from './Name';
import Variants from './Variants';
import Prices from './Prices';

function Item({ itemControls: ItemControls, ...props }) {
  const { name, imgUrl, variants, price, quantity } = props;
  return (
    <ListItem>
      <Layout>
        <Thumbnail src={imgUrl} alt={name} />
        <section>
          <Name>{name}</Name>
          <Variants variants={variants} />
          <Prices price={price} quantity={quantity} />
        </section>
      </Layout>
      {ItemControls && <ItemControls {...props} />}
    </ListItem>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  variants: PropTypes.shape({
    size: PropTypes.string,
    color: PropTypes.string
  }).isRequired,
  price: PropTypes.shape({
    regular: PropTypes.number.isRequired,
    discount: PropTypes.number
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  itemControls: PropTypes.func
};

export default Item;
