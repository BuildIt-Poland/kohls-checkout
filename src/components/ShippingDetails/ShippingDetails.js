import React from 'react';
import styled from 'styled-components';

import { colorLightGrey, spacingSmall } from '../../styles/designTokens';
import { formatDate } from '../../utils';
import Shipping from '../Icons/Shipping';
import Text from '../Text';

const Section = styled.section`
  margin: 0 auto;
  width: 100rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Message = styled.div`
  flex-grow: 1;
  padding: 0 ${spacingSmall};
`;

const MessageTitle = styled(Text)`
  margin: 0;
`;

const ArrivalDates = styled.span`
  font-weight: bold;
  margin-left: ${spacingSmall};
`;

function ShippingDetails() {
  const arrivalDate = () => {
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
          <ArrivalDates>{arrivalDate()}</ArrivalDates>
        </Message>
      </Wrapper>
    </Section>
  );
}

export default ShippingDetails;
