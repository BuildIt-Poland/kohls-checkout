import React from 'react';

import { colorLightGrey } from '../../styles/designTokens';
import { formatDate } from '../../utils';
import Shipping from '../Icons/Shipping';
import Text from '../Text';
import ShippingText from './ShippingText';
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
        <ShippingText>Arrives</ShippingText>
        <ShippingText>
          Ship to Me
          <ShippingText bold as="span">
            {getArrivalDates()}
          </ShippingText>
        </ShippingText>
      </Wrapper>
    </>
  );
}

export default ShippingDetails;
