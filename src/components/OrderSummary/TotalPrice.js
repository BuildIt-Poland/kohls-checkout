import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontWeightBold, borderWidthThin, colorLightGrey, spacingMedium } from '../../styles/designTokens';
import Price from '../Price';
import TextRow from './TextRow';

const Total = styled.span`
  font-weight: ${fontWeightBold};
`;

const Row = styled(TextRow)`
  border-top: ${borderWidthThin} solid ${colorLightGrey};
  padding-top: ${spacingMedium};
  margin-top: ${spacingMedium};
`;

function TotalPrice({ price }) {
  return (
    <Row>
      <Total>Total</Total>
      <Total>
        <Price price={price} />
      </Total>
    </Row>
  );
}

TotalPrice.propTypes = {
  price: PropTypes.number.isRequired
};

export default TotalPrice;
