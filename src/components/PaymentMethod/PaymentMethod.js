import React from 'react';

import { paymentInfo } from '../../types';
import Text from '../Text';
import SectionHeader from '../SectionHeader';
import Section from '../Section';
import PaymentCard from '../PaymentCard';
import Price from '../Price';
import Wrapper from './Wrapper';
import CardName from './CardName';

function hiddenCardNumber(cardNumber) {
  return `XXXX-XXXX-XXXX-${cardNumber.slice(12)}`;
}

function PaymentMethod({ paymentInfo }) {
  const { cardNumber, expMonth, expYear } = paymentInfo;

  return (
    <Section>
      <SectionHeader>Payment Method</SectionHeader>
      <Wrapper>
        <PaymentCard cardNumber={cardNumber} />
        <div>
          <CardName cardNumber={cardNumber} />
          <Text>
            {hiddenCardNumber(cardNumber)}{' '}
            <strong>
              <Price price={25500} />
            </strong>
          </Text>
          <Text>
            Expires {expMonth}/{expYear}
          </Text>
        </div>
      </Wrapper>
    </Section>
  );
}

PaymentMethod.propTypes = {
  paymentInfo: paymentInfo.isRequired
};

export default PaymentMethod;
