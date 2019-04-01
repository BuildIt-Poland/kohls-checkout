import React from 'react';
import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';
import Text from '../Text/Text';
import SectionHeader from '../SectionHeader';
import TextHighlight from '../TextHighlight';
import PriceBadge from './PriceBadge';
import PriceRow from './PriceRow';
import TotalPrice from './TotalPrice';

const Wrapper = styled.div`
  padding-left: ${spacingMedium};
  padding-right: ${spacingMedium};
`;

function OrderSummary() {
  return (
    <>
      <SectionHeader title="Order Summary"> </SectionHeader>
      <Wrapper>
        <PriceRow>
          <Text>
            Subtotal<PriceBadge>$125.00</PriceBadge>
          </Text>
        </PriceRow>
        <PriceRow>
          <TextHighlight isBold>
            Kohl's Cash & Discounts<PriceBadge>-$18.75</PriceBadge>
          </TextHighlight>
        </PriceRow>
        <PriceRow>
          <Text isUnderline>
            Shipping<PriceBadge>Free</PriceBadge>
          </Text>
        </PriceRow>
        <TextHighlight>You have earned free shipping.</TextHighlight>
        <PriceRow>
          <Text isUnderline>
            Tax<PriceBadge>$6.38</PriceBadge>
          </Text>
        </PriceRow>
        <hr />
        <TotalPrice />
        <PriceRow>
          <Text>
            Your Savings<PriceBadge>$122.70</PriceBadge>
          </Text>
        </PriceRow>
      </Wrapper>
    </>
  );
}

export default OrderSummary;
