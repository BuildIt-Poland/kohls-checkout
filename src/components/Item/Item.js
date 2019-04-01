import React from 'react';

import Image from './Image';
import Price from './Price';
import Title from './Title';
import Attribute from './Attribute';
import Quantity from './Quantity';
import TotalPrice from './TotalPrice';
import DiscountPrice from './DiscountPrice';
import PriceBox from './PriceBox';
import Wrapper from './Wrapper';
import RemoveButton from '../RemoveButton/RemoveButton';
import Details from './Details';

function Item() {
  return (
    <Wrapper>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/71ZgPluVoTL._UX385_.jpg" />
      <Details>
        <Title>Men's Chaps Performance Series Classic-Fit 4-Way Strech Sit Jacket</Title>
        <Attribute>Size: 42 SHORT</Attribute>
        <Attribute>Color: Charcoal</Attribute>
        <PriceBox>
          <DiscountPrice>Sale $125.00</DiscountPrice>
          <Price>Regular $240.00</Price>
          <TotalPrice>Total $115.00</TotalPrice>
        </PriceBox>
      </Details>
      <Quantity />
      <RemoveButton>Remove</RemoveButton>
    </Wrapper>
  );
}

export default Item;
