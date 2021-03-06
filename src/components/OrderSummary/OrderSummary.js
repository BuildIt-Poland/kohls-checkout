import React from 'react';
import PropTypes from 'prop-types';

import { item } from '../../types';
import ErrorBoundary from '../ErrorBoundary';
import SectionHeader from '../SectionHeader';
import ScreenWideSection from '../ScreenWideSection';
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

function OrderSummary({ items }) {
  const subtotal = subtotalPrice(items);

  return (
    <ErrorBoundary>
      <ScreenWideSection>
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
      </ScreenWideSection>
    </ErrorBoundary>
  );
}

OrderSummary.propTypes = {
  /** Array of cart items */
  items: PropTypes.arrayOf(item).isRequired
};

export default OrderSummary;
