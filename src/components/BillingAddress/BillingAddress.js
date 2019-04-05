import React from 'react';

import SectionHeader from '../SectionHeader';
import Address from './Address';
import Text from './Text';
import ModalTrigger from '../ModalTrigger';

function BillingAddress({ name, address }) {
  const modalTrigger = (
    <ModalTrigger title="Billing Address" content="">
      <Text underline>Open Modal</Text>
    </ModalTrigger>
  );
  return (
    <section>
      <SectionHeader actionElement={modalTrigger}>Billing Address</SectionHeader>
      <Address>
        <Text bold>{name}</Text>
        <Text>{address.street}</Text>
        <Text>{address.city}</Text>
        <Text>{address.phoneNumber}</Text>
      </Address>
    </section>
  );
}

export default BillingAddress;
