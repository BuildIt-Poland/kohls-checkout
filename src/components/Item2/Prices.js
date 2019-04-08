import React from 'react';
import PropTypes from 'prop-types';

import { formattedPrice } from '../../utils';
import Text from '../Text';
import TextBlock from './TextBlock';
import SmallText from './SmallText';
import Discount from './Discount';

export function totalPrice(quantity, regularPrice, discountPrice) {
  if (discountPrice) {
    return quantity * discountPrice;
  }
  return quantity * regularPrice;
}

function Prices({ price, quantity }) {
  return (
    <TextBlock>
      {price.discount && <Discount>Sale: {formattedPrice(price.discount)}</Discount>}
      <SmallText strikeOff={!!price.discount}>Regular: {formattedPrice(price.regular)}</SmallText>
      <Text bold>Total: {formattedPrice(totalPrice(quantity, price.regular, price.discount))}</Text>
    </TextBlock>
  );
}

Prices.propTypes = {
  price: PropTypes.shape({
    regular: PropTypes.number.isRequired,
    discount: PropTypes.number
  }),
  quantity: PropTypes.number.isRequired
};

export default Prices;
