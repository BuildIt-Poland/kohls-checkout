import React from 'react';

import { NO_SIZE, NO_COLOR } from '../../constants/attributes';
import RemoveButton from '../RemoveButton/RemoveButton';
import Image from './Image';
import Price from './Price';
import Title from './Title';
import Attribute from './Attribute';
import Quantity from './Quantity';
import TotalPrice from './TotalPrice';
import DiscountPrice from './DiscountPrice';
import PriceBox from './PriceBox';
import Wrapper from './Wrapper';
import Details from './Details';

const getTotalPrice = function(item) {
  const { quantity, price } = item;
  return quantity * (price.regular - price.discount);
};

const renderAttributes = function(item) {
  const { variants } = item;

  if (!variants) {
    return null;
  }

  const size = variants.size ? variants.size : NO_SIZE;
  const color = variants.color ? variants.color : NO_COLOR;

  return (
    <>
      <Attribute>Size: {size}</Attribute>
      <Attribute>Color: {color}</Attribute>
    </>
  );
};

const renderPrices = function(item) {
  if (!item.price) {
    return null;
  }
  const { price } = item;

  return (
    <PriceBox>
      <DiscountPrice>Sale ${price.discount}</DiscountPrice>
      <Price>Regular ${price.regular}</Price>
      <TotalPrice>Total ${getTotalPrice(item)}</TotalPrice>
    </PriceBox>
  );
};

function Item({ item = {}, editableQuantity = false, itemId = 0, handleUpdate }) {
  return (
    <Wrapper>
      <Image src={item.imgUrl} />
      <Details>
        <Title>{item.name}</Title>
        {renderAttributes(item)}
        {renderPrices(item)}
      </Details>
      {editableQuantity ? (
        <Quantity
          quantity={item.quantity}
          currentQuantity={item.quantity}
          cartItemId={itemId}
          handleUpdate={handleUpdate}
        />
      ) : null}
      <RemoveButton editableQuantity={editableQuantity}>Remove</RemoveButton>
    </Wrapper>
  );
}

export default Item;
