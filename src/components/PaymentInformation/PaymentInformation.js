import React from 'react';
import { Link } from 'react-router-dom';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import TextLink from '../TextLink/TextLink';
import SectionHeader from '../SectionHeader';
import BillingAddress from '../BillingAddress/BillingAddress';
import Text from '../Text';
import PaymentMethod from './PaymentMethod';

const ADDRESS = {
  street: '228 Park Ave S',
  city: 'New York, NY 10003',
  phoneNumber: '(444) 444-4444'
};

function PaymentInformation() {
  const textLink = (
    <TextLink as={Link} to={CHECKOUT_PAYMENT_PATH}>
      Edit
    </TextLink>
  );

  return (
    <section>
      <SectionHeader actionElement={textLink}>Payment Information</SectionHeader>
      <SectionHeader>Payment Method</SectionHeader>
      <PaymentMethod cardNumber="4111111111111111" expiries="04/21" price={220.5} />
      <BillingAddress name="Asd Bgh" address={ADDRESS} />
      <SectionHeader>Email Address</SectionHeader>
      <Text>asdasdasd@adasad.com</Text>
    </section>
  );
}

export default PaymentInformation;
