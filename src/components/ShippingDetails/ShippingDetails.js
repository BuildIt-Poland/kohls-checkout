import React from 'react';

import { colorLightGrey } from '../../styles/designTokens';
import { formatDate } from '../../utils';
import Shipping from '../Icons/Shipping';
import Text from '../Text';
import ArrivalDates from './ArrivalDates';
import Message from './Message';
import MessageTitle from './MessageTitle';
import Section from './Section';
import Wrapper from './Wrapper';

function ShippingDetails() {
  const arrivalDates = () => {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);

    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <Section>
      <Text bold as="h3">
        Item can only be shipped Standard
      </Text>
      <Wrapper>
        <Shipping fill={colorLightGrey} />
        <Message>
          <MessageTitle>Ship to Me</MessageTitle>
          <Text as="span">Arrives</Text>
          <ArrivalDates>{arrivalDates()}</ArrivalDates>
        </Message>
      </Wrapper>
    </Section>
  );
}

export default ShippingDetails;
