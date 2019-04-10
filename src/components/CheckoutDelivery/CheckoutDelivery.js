import React from 'react';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import Page from '../Page';
import Headline from '../Headline';
import Content from '../Content';
import ModalTrigger from '../ModalTrigger';
import NextStep from '../NextStep';
import SectionHeader from '../SectionHeader';
import ShippingAddressForm from '../ShippingAddressForm';

function CheckoutDelivery() {
  const modalTrigger = (
    <ModalTrigger
      title="Shipping &amp; Pickup"
      content="Items being shipped may need to be divided into two or more shipments. This will not affect shipping charges."
    />
  );

  return (
    <Page title="Delivery">
      <Content>
        <Headline>Delivery</Headline>
        <section>
          <SectionHeader actionElement={modalTrigger}>Shipping Address</SectionHeader>
        </section>
        <ShippingAddressForm />
      </Content>
      <NextStep label="Continue to Payment" to={CHECKOUT_PAYMENT_PATH} />
    </Page>
  );
}

export default CheckoutDelivery;
