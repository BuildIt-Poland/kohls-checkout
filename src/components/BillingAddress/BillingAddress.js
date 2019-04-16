import React from 'react';

import { address } from '../../types';
import ModalTrigger from '../ModalTrigger';
import Address from './Address';
import Text from './Text';
import Section from './Section';

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
    <Section>
      <Text bold as="h3" actionElement={modalTrigger}>
        Billing Address
      </Text>
      <Address>
        <Text bold>
          {address.firstName} {address.lastName}
        </Text>
        <Text>{address.street}</Text>
        <Text>{address.city}</Text>
        <Text>{address.phone}</Text>
      </Address>
    </Section>
  );
}

BillingAddress.propTypes = {
  address: address.isRequired
};

export default BillingAddress;
