import React from 'react';
import { string } from 'prop-types';

import { address } from '../../types';
import ModalTrigger from '../ModalTrigger';
import Address from './Address';
import Text from './Text';
import SubsectionHeader from '../SubsectionHeader';
import Section from '../Section';

function AddressDetails({ title, address }) {
  const modalTrigger = (
    <ModalTrigger
      title={title}
      content="Information should exactly match your credit card statement. Incomplete or incorrect information may slow order processing."
    >
      <Text underline>Open Modal</Text>
    </ModalTrigger>
  );
  return (
    <Section>
      <SubsectionHeader actionElement={modalTrigger}>{title}</SubsectionHeader>
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
  title: string.isRequired,
  address: address.isRequired
};

export default AddressDetails;
