import React from 'react';
import { Link } from 'react-router-dom';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import TextLink from '../TextLink';
import AddressDetails from '../AddressDetails';
import SectionHeader from '../SectionHeader';
import Content from '../Content';
import PaymentMethod from '../PaymentMethod';

function PaymentInformation() {
  const textLink = (
    <TextLink as={Link} to={CHECKOUT_PAYMENT_PATH}>
      Edit
    </TextLink>
  );

  return (
    <Content>
      <SectionHeader actionElement={textLink}>Payment Information</SectionHeader>
      <PaymentMethod />
      <AddressDetails header="Billing Address" />
    </Content>
  );
}

export default PaymentInformation;
