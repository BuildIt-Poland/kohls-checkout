import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import { address } from '../../types';
import ErrorBoundary from '../ErrorBoundary';
import Page from '../Page';
import Headline from '../Headline';
import Content from '../Content';
import ModalTrigger from '../ModalTrigger';
import NextStep from '../NextStep';
import SectionHeader from '../SectionHeader';
import Form from './Form';
import shippingAddressValidation from './shippingAddressValidation';

function CheckoutDelivery({ history, initialAddress, setAddress }) {
  const modalTrigger = (
    <ModalTrigger
      title="Shipping &amp; Pickup"
      content="Items being shipped may need to be divided into two or more shipments. This will not affect shipping charges."
    />
  );

  const hadleFormSubmit = formValues => {
    // Redirect to payment after successful form submission
    setAddress(formValues);
    history.push(CHECKOUT_PAYMENT_PATH);
  };

  return (
    <Page title="Delivery">
      <ErrorBoundary>
        <Formik initialValues={initialAddress} validationSchema={shippingAddressValidation} onSubmit={hadleFormSubmit}>
          {({ submitForm }) => (
            <>
              <Content>
                <Headline>Delivery</Headline>
                <section>
                  <SectionHeader actionElement={modalTrigger}>Shipping Address</SectionHeader>
                  <Form />
                </section>
              </Content>
              <NextStep label="Continue to Payment" onMoveToNextStep={submitForm} />
            </>
          )}
        </Formik>
      </ErrorBoundary>
    </Page>
  );
}

CheckoutDelivery.propTypes = {
  history: PropTypes.object.isRequired,
  initialAddress: address.isRequired,
  setAddress: PropTypes.func.isRequired
};

export default CheckoutDelivery;
