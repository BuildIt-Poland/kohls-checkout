import React from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../SectionHeader';
import ModalTrigger from '../ModalTrigger';
import Address from './Address';
import Text from './Text';

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

BillingAddress.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired
};

export default BillingAddress;
