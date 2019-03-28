import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Price from './Price';
import ItemTitle from './ItemTitle';
import ItemAttribute from './ItemAttribute';
import ItemQuantity from './ItemQuantity';
import TotalPrice from './TotalPrice';
import DiscountPrice from './DiscountPrice';
import PriceBox from './PriceBox';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  align-items: center;
  margin: 3rem 1.3rem;
`;

function Item() {
  return (
    <Wrapper>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/71ZgPluVoTL._UX385_.jpg" />
      <ItemTitle>Men's Chaps Performance Series Classic-Fit 4-Way Strech Sit Jacket</ItemTitle>
      <ItemAttribute>Size: 42 SHORT</ItemAttribute>
      <ItemAttribute>Color: Charcoal</ItemAttribute>
      <PriceBox>
        <DiscountPrice price="125" />
        <Price price="220" />
        <TotalPrice price="115" />
      </PriceBox>
      <ItemQuantity />
    </Wrapper>
  );
}

export default Item;
