import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import styled from 'styled-components';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import { address } from '../../types';
import { scrollToRef } from '../../utils';
import ErrorBoundary from '../ErrorBoundary';
import Page from '../Page';
import Headline from '../Headline';
import Content from '../Content';
import ModalTrigger from '../ModalTrigger';
import NextStep from '../NextStep';
import SectionHeader from '../SectionHeader';
import OrderSummary from '../OrderSummary';
import ItemsList from '../ItemsList';
import Form from './Form';
import shippingAddressValidation from './shippingAddressValidation';

const ScrollAnchor = styled.div`
  position: absolute;
`;

function CheckoutDelivery({ history, initialAddress, setAddress }) {
  const scrollAnchorRef = useRef(null);

  const modalTrigger = (
    <ModalTrigger
      title="Shipping &amp; Pickup"
      content="Items being shipped may need to be divided into two or more shipments. This will not affect shipping charges."
    />
  );

  const attemptFormSubmit = submitForm => {
    scrollToRef(scrollAnchorRef, 20);
    submitForm();
  };

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
                <ScrollAnchor ref={scrollAnchorRef} />
                <SectionHeader actionElement={modalTrigger}>Shipping Address</SectionHeader>
                <Form />
              </Content>
              <ItemsList />
              <OrderSummary />
              <NextStep label="Continue to Payment" onMoveToNextStep={() => attemptFormSubmit(submitForm)} />
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
