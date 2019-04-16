import React from 'react';
import { string } from 'prop-types';

import { address } from '../../types';
import ModalTrigger from '../ModalTrigger';
import Address from './Address';
import Text from './Text';
import Section from './Section';

function BillingAddress({ header, address }) {
  const modalTrigger = (
    <ModalTrigger
      title={header}
      content="Information should exactly match your credit card statement. Incomplete or incorrect information may slow order processing."
    >
      <Text underline>Open Modal</Text>
    </ModalTrigger>
  );
  return (
    <Section>
      <Text bold as="h3" actionElement={modalTrigger}>
        {header}
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
  header: string.isRequired,
  address: address.isRequired
};

export default BillingAddress;
