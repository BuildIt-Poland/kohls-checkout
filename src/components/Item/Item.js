import React from 'react';

import Image from './Image';
import Price from './Price';
import ItemTitle from './ItemTitle';
import ItemAttribute from './ItemAttribute';
import ItemQuantity from './ItemQuantity';
import TotalPrice from './TotalPrice';
import DiscountPrice from './DiscountPrice';
import PriceBox from './PriceBox';
import Wrapper from './Wrapper';

function Item() {
  return (
    <Wrapper>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/71ZgPluVoTL._UX385_.jpg" />
      <ItemTitle>Men's Chaps Performance Series Classic-Fit 4-Way Strech Sit Jacket</ItemTitle>
      <ItemAttribute>Size: 42 SHORT</ItemAttribute>
      <ItemAttribute>Color: Charcoal</ItemAttribute>
      <PriceBox>
        <DiscountPrice>Sale $125.00</DiscountPrice>
        <Price>Regular $240.00</Price>
        <TotalPrice>Total $115.00</TotalPrice>
      </PriceBox>
      <ItemQuantity />
    </Wrapper>
  );
}

export default Item;
