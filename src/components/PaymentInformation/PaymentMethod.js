import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import PaymentCard from './PaymentCard';
import CardName from './CardName';
import Text from '../Text';
import Price from './Price';

function PaymentMethod({ cardNumber, expiries, price }) {
  const maskCardNumber = cardNumber => cardNumber.replace(/^(\d{4}){3}(?=\d{4})/gi, 'XXXX-XXXX-XXXX-');

  return (
    <Wrapper>
      <PaymentCard cardNumber={cardNumber} />
      <div>
        <CardName cardNumber={cardNumber} />
        <Text as="span">{maskCardNumber(cardNumber)}</Text>
        <Price as="span" bold>
          ${price}
        </Price>
        <Text>Expires {expiries}</Text>
      </div>
    </Wrapper>
  );
}

PaymentMethod.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  expiries: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default PaymentMethod;
