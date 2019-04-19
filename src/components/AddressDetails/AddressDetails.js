import React from 'react';
import { string } from 'prop-types';

import { address } from '../../types';
import ModalTrigger from '../ModalTrigger';
import Address from './Address';
import Text from './Text';
import SectionHeader from '../SectionHeader';
import Section from '../Section';

function AddressDetails({ header, address }) {
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
      <SectionHeader actionElement={modalTrigger}>{header}</SectionHeader>
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

AddressDetails.propTypes = {
  /** Header displayed in SectionHeader and Modal title */
  header: string.isRequired,
  /** Object containing detailed address data */
  address: address.isRequired
};

export default AddressDetails;
