import React from 'react';
import noop from 'lodash.noop';

import { NO_SIZE, NO_COLOR } from '../../constants/attributes';
import RemoveButton from '../RemoveButton';
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

const getTotalPrice = (quantity, price) => quantity * (price.regular - price.discount);

const renderAttributes = function({ variants }) {
  if (!variants) {
    return null;
  }

  const size = variants.size || NO_SIZE;
  const color = variants.color || NO_COLOR;

  return (
    <>
      <Attribute>Size: {size}</Attribute>
      <Attribute>Color: {color}</Attribute>
    </>
  );
};

const renderPrices = function({ price, quantity }) {
  if (!price) {
    return null;
  }

  return (
    <PriceBox>
      <DiscountPrice>Sale ${price.discount}</DiscountPrice>
      <Price>Regular ${price.regular}</Price>
      <TotalPrice>Total ${getTotalPrice(quantity, price)}</TotalPrice>
    </PriceBox>
  );
};

const renderQuantity = function(
  { id, quantity },
  editableQuantity,
  handleIncreaseItemQuantity,
  handleDecreaseItemQuantity,
  handleSetItemQuantity
) {
  if (!editableQuantity) {
    return null;
  }

  return (
    <Quantity
      currentQuantity={quantity}
      handleSetItemQuantity={handleSetItemQuantity}
      handleIncreaseItemQuantity={handleIncreaseItemQuantity}
      handleDecreaseItemQuantity={handleDecreaseItemQuantity}
    />
  );
};

function Item({
  item = {},
  editableQuantity = false,
  handleRemoveItem = noop,
  handleIncreaseItemQuantity = noop,
  handleDecreaseItemQuantity = noop,
  handleSetItemQuantity = noop
}) {
  const { id, imgUrl, name } = item;
  return (
    <Wrapper>
      <Image src={imgUrl} />
      <Details>
        <Title>{name}</Title>
        {renderAttributes(item)}
        {renderPrices(item)}
      </Details>
      {renderQuantity(
        item,
        editableQuantity,
        handleIncreaseItemQuantity,
        handleDecreaseItemQuantity,
        handleSetItemQuantity
      )}
      <RemoveButton editableQuantity={editableQuantity} cartItemId={id} handleClick={handleRemoveItem} />
    </Wrapper>
  );
}

export default Item;
