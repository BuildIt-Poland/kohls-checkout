import React from 'react';

import { paymentInfo } from '../../types';
import Text from '../Text';
import SubsectionHeader from '../SubsectionHeader';
import Section from '../Section';
import PaymentCard from '../PaymentCard';
import Wrapper from './Wrapper';
import CardName from './CardName';

function hiddenCardNumber(cardNumber) {
  return `XXXX-XXXX-XXXX-${cardNumber.slice(12)}`;
}

function PaymentMethod({ paymentInfo }) {
  const { cardNumber, expMonth, expYear } = paymentInfo;

  return (
    <Section>
      <SubsectionHeader>Payment Method</SubsectionHeader>
      <Wrapper>
        <PaymentCard cardNumber={cardNumber} />
        <section>
          <CardName cardNumber={cardNumber} />
          <Text>{hiddenCardNumber(cardNumber)}</Text>
          <Text>
            Expires {expMonth}/{expYear}
          </Text>
        </section>
      </Wrapper>
    </Section>
  );
}

PaymentMethod.propTypes = {
  paymentInfo: paymentInfo.isRequired
};

export default PaymentMethod;
