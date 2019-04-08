import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import SectionHeader from '../SectionHeader';
import Wrapper from './Wrapper';
import PaymentCard from './PaymentCard';
import CardName from './CardName';
import Price from './Price';

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
