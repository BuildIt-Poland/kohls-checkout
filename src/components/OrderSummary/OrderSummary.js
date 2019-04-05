import React from 'react';

import SectionHeader from '../SectionHeader';
import Content from '../Content';
import TextRow from './TextRow';
import TotalPrice from './TotalPrice';
import Wrapper from './Wrapper';

function OrderSummary() {
  return (
    <Wrapper>
      <Content as="section">
        <SectionHeader>Order Summary</SectionHeader>
        <TextRow>
          <span>Subtotal</span>
          <span>$125.00</span>
        </TextRow>
        <TextRow highlight>
          <span>Kohl's Cash &amp; Discounts</span>
          <span>-$18.75</span>
        </TextRow>
        <TextRow>
          <span>Shipping</span>
          <strong>FREE</strong>
        </TextRow>
        <TextRow>
          <span>Tax</span>
          <span>$6.38</span>
        </TextRow>
        <TotalPrice price={122.7} />
        <TextRow>
          <span>Your Savings</span>
          <span>$122.70</span>
        </TextRow>
      </Content>
    </Wrapper>
  );
}

export default OrderSummary;
