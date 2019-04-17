import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import { paymentInfo } from '../../types';
import Page from '../Page';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import Headline from '../Headline';
import ErrorBoundary from '../ErrorBoundary';
import Content from './Content';
import Form from './Form';
import checkoutPaymentValidation from './checkoutPaymentValidation';

function CheckoutPayment({ history, initialPaymentInfo, setPaymentInfo }) {
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
                <Form />
              </Content>
              <OrderSummary />
              <NextStep label="Review Order" onMoveToNextStep={submitForm} />
            </>
          )}
        </Formik>
      </ErrorBoundary>
    </Page>
  );
}

CheckoutPayment.propTypes = {
  history: PropTypes.object.isRequired,
  initialPaymentInfo: paymentInfo.isRequired,
  setPaymentInfo: PropTypes.func.isRequired
};

export default CheckoutPayment;
