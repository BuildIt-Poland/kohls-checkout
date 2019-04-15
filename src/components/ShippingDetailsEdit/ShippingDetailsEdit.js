import React from 'react';
import { Link } from 'react-router-dom';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import SectionHeader from '../SectionHeader';
import TextLink from '../TextLink';

function ShippingDetailsEdit() {
  const textLink = (
    <TextLink as={Link} to={CHECKOUT_DELIVERY_PATH}>
      Edit
    </TextLink>
  );

  return (
    <section>
      <SectionHeader actionElement={textLink}>Shipping Details</SectionHeader>
    </section>
  );
}

export default ShippingDetailsEdit;
