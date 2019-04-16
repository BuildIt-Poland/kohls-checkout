import React from 'react';
import { Link } from 'react-router-dom';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import SectionHeader from '../SectionHeader';
import TextLink from '../TextLink';
import AddressDetails from '../AddressDetails';
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
      <AddressDetails header="Shipping Address" />
      <ItemsList />
    </Content>
  );
}

export default ShippingDetailsEdit;
