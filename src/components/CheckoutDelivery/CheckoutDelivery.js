import React from 'react';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import Page from '../Page';
import Content from '../Content';
import ModalTrigger from '../ModalTrigger';
import Text from '../Text';
import NextStep from '../NextStep';
import Headline from '../Headline';
import SectionHeader from '../SectionHeader';

const SHIPPING_DETAILS_MODAL_CONTENT =
  'Items being shipped may need to be divided into two or more shipments. This will not affect shipping charges.';

function CheckoutDelivery() {
  return (
    <Page>
      <Content>
        <Headline>Delivery</Headline>
        <section>
          <SectionHeader>
            Shipping Address
            <ModalTrigger title="Shipping &amp; Pickup" content={SHIPPING_DETAILS_MODAL_CONTENT}>
              <Text underline>Open modal</Text>
            </ModalTrigger>
          </SectionHeader>
        </section>
      </Content>
      <NextStep label="Continue to Payment" to={CHECKOUT_PAYMENT_PATH} />
    </Page>
  );
}

export default CheckoutDelivery;
