import React from 'react';

import CardNumber from './CardNumber';
import Wrapper from './Wrapper';
import PaymentCard from './PaymentCard';
import CardName from './CardName';
import CardExpires from './CardExpires';
import Price from './Price';

function PaymentMethod({ cardNumber, expiries, price }) {
  const maskCardNumber = cardNumber => cardNumber.replace(/^(\d{4}){3}(?=\d{4})/gi, 'XXXX-XXXX-XXXX-');

  return (
    <Wrapper>
      <PaymentCard cardNumber={cardNumber} />
      <CardName cardNumber={cardNumber} />
      <CardNumber>{maskCardNumber(cardNumber)}</CardNumber>
      <CardExpires>Expires {expiries}</CardExpires>
      <Price bold>${price}</Price>
    </Wrapper>
  );
}

export default PaymentMethod;
