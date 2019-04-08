import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import PaymentCard from './PaymentCard';
import CardName from './CardName';
import Text from '../Text';
import Price from './Price';
import SectionHeader from '../SectionHeader';

function PaymentMethod({ cardNumber, expiries, price }) {
  const hideCardNumber = () => `XXXX-XXXX-XXXX-${cardNumber.slice(12)}`;

  return (
    <>
      <SectionHeader>Payment Method</SectionHeader>
      <Wrapper>
        <PaymentCard cardNumber={cardNumber} />
        <div>
          <CardName cardNumber={cardNumber} />
          <Text as="span">{hideCardNumber()}</Text>
          <Price as="span" bold>
            ${price}
          </Price>
          <Text>Expires {expiries}</Text>
        </div>
      </Wrapper>
    </>
  );
}

PaymentMethod.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  expiries: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default PaymentMethod;
