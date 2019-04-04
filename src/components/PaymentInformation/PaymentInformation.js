import React from 'react';
import { Link } from 'react-router-dom';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import TextRow from '../OrderSummary/TextRow';
import TextLink from '../TextLink/TextLink';
import SectionHeader from '../SectionHeader';

function PaymentInformation() {
  return (
    <section>
      <SectionHeader>
        <TextRow>
          Payment Information
          <TextLink as={Link} to={CHECKOUT_PAYMENT_PATH}>
            Edit
          </TextLink>
        </TextRow>
      </SectionHeader>
    </section>
  );
}

export default PaymentInformation;
