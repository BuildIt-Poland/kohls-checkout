import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSmall, fontWeightBold } from '../../styles/designTokens';
import Row from './TextRow';

const PriceSummary = styled.span`
  font-size: ${fontSmall};
  font-weight: ${fontWeightBold};
`;

function TotalPrice({ price }) {
  return (
    <Row>
      <PriceSummary>TOTAL ${price}</PriceSummary>
    </Row>
  );
}

TotalPrice.propTypes = {
  price: PropTypes.number.isRequired
};

export default TotalPrice;
