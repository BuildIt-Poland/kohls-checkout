import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSmall, fontWeightBold } from '../../styles/designTokens';
import PriceRow from './PriceRow';

const PriceSummary = styled.span`
  font-size: ${fontSmall};
  font-weight: ${fontWeightBold};
`;

function TotalPrice({ price }) {
  return (
    <PriceRow>
      <PriceSummary>TOTAL ${price}</PriceSummary>
    </PriceRow>
  );
}

TotalPrice.propTypes = {
  price: PropTypes.number.isRequired
};

export default TotalPrice;
