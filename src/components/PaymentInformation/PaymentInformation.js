import React from 'react';
import { Link } from 'react-router-dom';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import TextLink from '../TextLink/TextLink';
import SectionHeader from '../SectionHeader';

function PaymentInformation() {
  const textLink = (
    <TextLink as={Link} to={CHECKOUT_PAYMENT_PATH}>
      Edit
    </TextLink>
  );

  return (
    <section>
      <SectionHeader actionElement={textLink}>Payment Information</SectionHeader>
    </section>
  );
}

export default PaymentInformation;
