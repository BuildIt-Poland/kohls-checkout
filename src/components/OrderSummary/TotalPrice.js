import React from 'react';
import styled from 'styled-components';

import { fontSmall } from '../../styles/designTokens';
import PriceBadge from './PriceBadge';
import PriceRow from './PriceRow';

const PriceSummary = styled.span`
  font-size: ${fontSmall};
  font-weight: bold;
`;

function TotalPrice() {
  return (
    <PriceRow>
      <PriceSummary>
        TOTAL<PriceBadge>$112.63</PriceBadge>
      </PriceSummary>
    </PriceRow>
  );
}

export default TotalPrice;
