import React, { useRef } from 'react';
import { Formik } from 'formik';
import { object, shape, number, string, oneOfType, func } from 'prop-types';
import styled from 'styled-components';

import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import { scrollToRef } from '../../utils';
import Page from '../Page';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import Headline from '../Headline';
import ErrorBoundary from '../ErrorBoundary';
import Content from './Content';
import Form from './Form';
import checkoutPaymentValidation from './checkoutPaymentValidation';

const ScrollAnchor = styled.div`
  position: absolute;
`;

function CheckoutPayment({ history, initialPaymentInfo, setPaymentInfo }) {
  const scrollAnchorRef = useRef(null);

  const attemptFormSubmit = submitForm => {
    scrollToRef(scrollAnchorRef, 4);
    submitForm();
  };

  const hadleFormSubmit = formValues => {
    setPaymentInfo(formValues);
    history.push(CHECKOUT_REVIEW_PATH);
  };

  return (
    <Page title="Payment">
      <ErrorBoundary>
        <Formik
          initialValues={initialPaymentInfo}
          validationSchema={checkoutPaymentValidation}
          onSubmit={hadleFormSubmit}
        >
          {({ submitForm }) => (
            <>
              <Content>
                <Headline>Payment</Headline>
                <ScrollAnchor ref={scrollAnchorRef} />
                <Form />
              </Content>
              <OrderSummary />
              <NextStep label="Review Order" onMoveToNextStep={() => attemptFormSubmit(submitForm)} />
            </>
          )}
        </Formik>
      </ErrorBoundary>
    </Page>
  );
}

CheckoutPayment.propTypes = {
  history: object.isRequired,
  initialPaymentInfo: shape({
    cardNumber: oneOfType([string, number]).isRequired,
    expMonth: oneOfType([string, number]).isRequired,
    expYear: oneOfType([string, number]).isRequired,
    securityCode: oneOfType([string, number]).isRequired
  }).isRequired,
  setPaymentInfo: func.isRequired
};

export default CheckoutPayment;
