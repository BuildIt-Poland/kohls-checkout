import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSmall } from '../../styles/designTokens';
import PriceBadge from './PriceBadge';
import PriceRow from './PriceRow';

const PriceSummary = styled.span`
  font-size: ${fontSmall};
  font-weight: bold;
`;

function TotalPrice({ price }) {
  return (
    <PriceRow>
      <PriceSummary>
        TOTAL<PriceBadge>${price}</PriceBadge>
      </PriceSummary>
    </PriceRow>
  );
}

TotalPrice.propTypes = {
  price: PropTypes.number.isRequired
};

export default TotalPrice;
