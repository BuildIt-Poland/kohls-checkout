import React from 'react';

import Text from '../Text/Text';
import SectionHeader from '../SectionHeader';
import TextHighlight from '../TextHighlight';
import PriceRow from './PriceRow';
import TotalPrice from './TotalPrice';

function OrderSummary() {
  return (
    <section>
      <SectionHeader title="Order Summary" />
      <PriceRow>
        <Text>Subtotal</Text>
        <Text>$125.00</Text>
      </PriceRow>
      <PriceRow>
        <TextHighlight bold>Kohl's Cash &amp; Discounts</TextHighlight>
        <TextHighlight>-$18.75</TextHighlight>
      </PriceRow>
      <PriceRow>
        <Text underline>Shipping</Text>
        <Text underline>FREE</Text>
      </PriceRow>
      <TextHighlight>You have earned free shipping.</TextHighlight>
      <PriceRow>
        <Text underline>Tax</Text>
        <Text underline>$6.38</Text>
      </PriceRow>
      <TotalPrice price={122.7} />
      <PriceRow>
        <Text>Your Savings</Text>
        <Text>$122.70</Text>
      </PriceRow>
    </section>
  );
}

export default OrderSummary;
