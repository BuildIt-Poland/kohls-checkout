import React from 'react';
import PropTypes from 'prop-types';

import { itemPrice } from '../../types';
import Text from '../Text';
import Price from '../Price';
import TextBlock from './TextBlock';
import SmallText from './SmallText';
import Discount from './Discount';
import Label from './Label';

export function totalPrice(quantity, regularPrice, discountPrice) {
  if (discountPrice) {
    return quantity * discountPrice;
  }
  return quantity * regularPrice;
}

function Prices({ price, quantity }) {
  return (
    <TextBlock>
      {price.discount && (
        <Discount>
          <Label>Sale:</Label> <Price price={price.discount} />
        </Discount>
      )}
      <SmallText strikeOff={!!price.discount}>
        <Label>Regular:</Label> <Price price={price.regular} />
      </SmallText>
      <Text bold data-testid="total-price">
        <Label>Total:</Label> <Price price={totalPrice(quantity, price.regular, price.discount)} />
      </Text>
    </TextBlock>
  );
}

Prices.propTypes = {
  price: itemPrice.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Prices;
