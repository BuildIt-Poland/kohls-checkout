import React, { memo } from 'react';

import { formatDate, addDays } from '../../utils';
import { Shipping as ShippingIcon } from '../Icons';
import ErrorBoundary from '../ErrorBoundary';
import Text from '../Text';
import Row from './Row';
import Wrapper from './Wrapper';

function ShippingDetails() {
  const startDate = new Date();
  const endDate = addDays(startDate, 3);

  return (
    <ErrorBoundary>
      <section>
        <Text bold>Items could only be shipped Standard</Text>
        <Wrapper>
          <span>
            <ShippingIcon />
          </span>
          <div>
            <Row>Ship to Me</Row>
            <Row>
              Arrives between <strong>{formatDate(startDate)}</strong> and <strong>{formatDate(endDate)}</strong>
            </Row>
          </div>
        </Wrapper>
      </section>
    </ErrorBoundary>
  );
}

export default memo(ShippingDetails);
