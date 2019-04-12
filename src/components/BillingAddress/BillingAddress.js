import React from 'react';

import { address } from '../../types';
import SectionHeader from '../SectionHeader';
import ModalTrigger from '../ModalTrigger';
import Address from './Address';
import Text from './Text';

function BillingAddress({ address }) {
  const modalTrigger = (
    <ModalTrigger
      title="Billing Address"
      content="Information should exactly match your credit card statement. Incomplete or incorrect information may slow order processing."
    >
      <Text underline>Open Modal</Text>
    </ModalTrigger>
  );
  return (
    <section>
      <SectionHeader actionElement={modalTrigger}>Billing Address</SectionHeader>
      <Address>
        <Text bold>
          {address.firstName} {address.lastName}
        </Text>
        <Text>{address.street}</Text>
        <Text>{address.city}</Text>
        <Text>{address.phone}</Text>
      </Address>
    </section>
  );
}

BillingAddress.propTypes = {
  address: address.isRequired
};

export default BillingAddress;
