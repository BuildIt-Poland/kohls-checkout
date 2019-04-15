import React from 'react';

import ErrorBoundary from '../ErrorBoundary';
import SectionHeader from '../SectionHeader';
import Price from '../Price';
import Content from '../Content';
import TextRow from './TextRow';
import TotalPrice from './TotalPrice';
import Wrapper from './Wrapper';

// TODO just for PoC purposes, in real app this calculations should be performed on server @blurbyte

const SHIPPING_COST = 0;
const SUPER_DISCOUNT_PERCENTAGE = 15;
const TAX_PERCANTAGE = 8;

export function subtotalPrice(items) {
  return items.reduce((allItemsPrice, item) => {
    const itemPrice = item.price.discount || item.price.regular; // takes discount price if it exists
    return allItemsPrice + itemPrice * item.quantity;
  }, 0);
}

export function totalPrice(shipping, discount, tax, subtotal) {
  return subtotal + subtotal * (tax / 100) - subtotal * (discount / 100) + shipping;
}

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
              -<Price price={subtotal * (SUPER_DISCOUNT_PERCENTAGE / 100)} />
            </span>
          </TextRow>
          <TextRow>
            <span>Shipping</span>
            <strong>{SHIPPING_COST ? <Price price={SHIPPING_COST} /> : 'FREE'}</strong>
          </TextRow>
          <TextRow>
            <span>Tax</span>
            <span>
              <Price price={subtotal * (TAX_PERCANTAGE / 100)} />
            </span>
          </TextRow>
          <TotalPrice price={totalPrice(SHIPPING_COST, SUPER_DISCOUNT_PERCENTAGE, TAX_PERCANTAGE, subtotal)} />
        </Content>
      </Wrapper>
    </ErrorBoundary>
  );
}

export default OrderSummary;
