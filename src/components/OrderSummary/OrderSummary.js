import React from 'react';

import SectionHeader from '../SectionHeader';
import TextHighlight from '../TextHighlight';
import TextRow from './TextRow';
import TotalPrice from './TotalPrice';

function OrderSummary() {
  return (
    <section>
      <SectionHeader>
        <TextRow>Order Summary</TextRow>
      </SectionHeader>
      <TextRow>
        <span>Subtotal</span>
        <span>$125.00</span>
      </TextRow>
      <TextRow>
        <span>Kohl's Cash &amp; Discounts</span>
        <span>-$18.75</span>
      </TextRow>
      <TextRow underline>
        <span>Shipping</span>
        <span>FREE</span>
      </TextRow>
      <TextHighlight>You have earned free shipping.</TextHighlight>
      <TextRow>
        <span>Tax</span>
        <span>$6.38</span>
      </TextRow>
      <TotalPrice price={122.7} />
      <TextRow>
        <span>Your Savings</span>
        <span>$122.70</span>
      </TextRow>
    </section>
  );
}

export default OrderSummary;
