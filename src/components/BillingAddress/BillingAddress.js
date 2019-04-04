import React from 'react';

import SectionHeader from '../SectionHeader';
import Address from './Address';
import Text from './Text';
import ModalTrigger from '../ModalTrigger';

function BillingAddress() {
  const modalTrigger = (
    <ModalTrigger title="Billing Address" content="">
      <Text underline>Open Modal</Text>
    </ModalTrigger>
  );
  return (
    <section>
      <SectionHeader actionElement={modalTrigger}>Billing Address</SectionHeader>
      <Address>
        <Text bold>asfasg gasgasgas</Text>
        <Text>100 Ocean Pkwy Apt EE</Text>
        <Text>Apt EE</Text>
        <Text>Brooklyn, NY 11218</Text>
        <Text>(444) 444-4444</Text>
      </Address>
    </section>
  );
}

export default BillingAddress;
