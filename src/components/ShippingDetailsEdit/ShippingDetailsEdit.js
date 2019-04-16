import React from 'react';
import { Link } from 'react-router-dom';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import SectionHeader from '../SectionHeader';
import TextLink from '../TextLink';
import BillingAddress from '../BillingAddress';
import ItemsList from '../ItemsList';
import Content from '../Content';

function ShippingDetailsEdit() {
  const textLink = (
    <TextLink as={Link} to={CHECKOUT_DELIVERY_PATH}>
      Edit
    </TextLink>
  );

  return (
    <Content>
      <SectionHeader actionElement={textLink}>Shipping Details</SectionHeader>
      <BillingAddress />
      <ItemsList />
    </Content>
  );
}

export default ShippingDetailsEdit;
