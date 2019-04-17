import React from 'react';
import { Link } from 'react-router-dom';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import TextLink from '../TextLink';
import AddressDetails from '../AddressDetails';
import Text from '../Text';
import SectionHeader from '../SectionHeader';
import Content from '../Content';
import PaymentMethod from './PaymentMethod';
import Section from '../Section';

function PaymentInformation() {
  const textLink = (
    <TextLink as={Link} to={CHECKOUT_PAYMENT_PATH}>
      Edit
    </TextLink>
  );

  return (
    <Content>
      <SectionHeader actionElement={textLink}>Payment Information</SectionHeader>
      <PaymentMethod cardNumber="4532888003415095" expiries="04/21" price={220.5} />
      <AddressDetails header="Billing Address" />
      <Section>
        <SectionHeader>Email Address</SectionHeader>
        <Text>asdasdasd@adasad.com</Text>
      </Section>
    </Content>
  );
}

export default PaymentInformation;
