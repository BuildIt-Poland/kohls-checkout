import React from 'react';

import ErrorBoundary from '../ErrorBoundary';
import SectionHeader from '../SectionHeader';
import Price from '../Price';
import Content from '../Content';
import {
  SHIPPING_COST,
  SUPER_DISCOUNT_PERCENTAGE,
  TAX_PERCANTAGE,
  subtotalPrice,
  totalPrice,
  superDiscountAmount,
  taxAmount
} from './demoOrderSummaryCalculations';
import TextRow from './TextRow';
import TotalPrice from './TotalPrice';
import Wrapper from './Wrapper';

function OrderSummary({ items }) {
  const subtotal = subtotalPrice(items);

  return (
    <ErrorBoundary>
      <Wrapper>
        <Content>
          <SectionHeader>Order Summary</SectionHeader>
          <TextRow>
            <span>Subtotal</span>
            <span>
              <Price price={subtotal} />
            </span>
          </TextRow>
          <TextRow highlight>
            <span>Cash &amp; Discounts</span>
            <span>
              -<Price price={superDiscountAmount(SUPER_DISCOUNT_PERCENTAGE, subtotal)} />
            </span>
          </TextRow>
          <TextRow>
            <span>Shipping</span>
            <strong>{SHIPPING_COST ? <Price price={SHIPPING_COST} /> : 'FREE'}</strong>
          </TextRow>
          <TextRow>
            <span>Tax</span>
            <span>
              <Price price={taxAmount(TAX_PERCANTAGE, subtotal)} />
            </span>
          </TextRow>
          <TotalPrice price={totalPrice(SHIPPING_COST, SUPER_DISCOUNT_PERCENTAGE, TAX_PERCANTAGE, subtotal)} />
        </Content>
      </Wrapper>
    </ErrorBoundary>
  );
}

export default OrderSummary;
