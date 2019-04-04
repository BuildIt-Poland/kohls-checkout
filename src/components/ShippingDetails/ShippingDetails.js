import React from 'react';
import { Link } from 'react-router-dom';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import TextRow from '../OrderSummary/TextRow';
import SectionHeader from '../SectionHeader';
import TextLink from '../TextLink';

function ShippingDetails() {
  return (
    <section>
      <SectionHeader>
        <TextRow>
          Shipping Details
          <TextLink as={Link} to={CHECKOUT_DELIVERY_PATH}>
            Edit
          </TextLink>
        </TextRow>
      </SectionHeader>
    </section>
  );
}

export default ShippingDetails;
