import React from 'react';

import Content from '../Content';
import SectionHeader from '../SectionHeader';
import ModalTrigger from '../ModalTrigger';
import Text from '../Text';

function CreditCardInfo() {
  const modalTrigger = (
    <ModalTrigger title="Order payment options" content="">
      <Text underline>Open Modal</Text>
    </ModalTrigger>
  );
  return (
    <Content>
      <SectionHeader actionElement={modalTrigger}>Enter your card info</SectionHeader>
    </Content>
  );
}

export default CreditCardInfo;
