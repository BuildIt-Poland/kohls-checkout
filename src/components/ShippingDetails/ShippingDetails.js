import React from 'react';

import { colorLightGrey } from '../../styles/designTokens';
import { formatDate } from '../../utils';
import Shipping from '../Icons/Shipping';
import Text from '../Text';
import ArrivalDates from './ArrivalDates';
import ShippingMessage from './ShippingMessage';
import Wrapper from './Wrapper';

function ShippingDetails() {
  const getArrivalDates = () => {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);

    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <>
      <Text bold>Item can only be shipped Standard</Text>
      <Wrapper>
        <Shipping fill={colorLightGrey} />
        <ShippingMessage>
          <p>Ship to Me</p>
          <p>
            Arrives
            <ArrivalDates>{getArrivalDates()}</ArrivalDates>
          </p>
        </ShippingMessage>
      </Wrapper>
    </>
  );
}

export default ShippingDetails;
