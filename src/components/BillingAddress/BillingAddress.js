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

const address = PropTypes.shape({
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
});

BillingAddress.propTypes = {
  name: PropTypes.string.isRequired,
  address: address.isRequired
};

export default BillingAddress;
