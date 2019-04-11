import React from 'react';
import { Formik } from 'formik';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import Page from '../Page';
import Headline from '../Headline';
import Content from '../Content';
import ModalTrigger from '../ModalTrigger';
import NextStep from '../NextStep';
import SectionHeader from '../SectionHeader';
import ShippingAddressForm from '../ShippingAddressForm';
import shippingAddressValidation from './shippingAddressValidation';

function CheckoutDelivery({ history }) {
  const modalTrigger = (
    <ModalTrigger
      title="Shipping &amp; Pickup"
      content="Items being shipped may need to be divided into two or more shipments. This will not affect shipping charges."
    />
  );

  const hadleFormSubmit = values => {
    // Redirect to payment after successful form submission
    history.push(CHECKOUT_PAYMENT_PATH);
  };

  return (
    <Page title="Delivery">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          phone: ''
        }}
        validationSchema={shippingAddressValidation}
        onSubmit={hadleFormSubmit}
      >
        {({ submitForm }) => (
          <>
            <Content>
              <Headline>Delivery</Headline>
              <section>
                <SectionHeader actionElement={modalTrigger}>Shipping Address</SectionHeader>
              </section>
              <ShippingAddressForm />
            </Content>
            <NextStep label="Continue to Payment" onMoveToNextStep={submitForm} />
          </>
        )}
      </Formik>
    </Page>
  );
}

export default CheckoutDelivery;
