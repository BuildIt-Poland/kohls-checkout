import React from 'react';
import { Formik } from 'formik';

import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import Page from '../Page';
import Content from '../Content';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import Headline from '../Headline';
import ErrorBoundary from '../ErrorBoundary';
import Form from './Form';
import checkoutPaymentValidation from './checkoutPaymentValidation';

//TODO connect with redux store
const initialValues = {
  cardNumber: '',
  expMonth: 'MM',
  expYear: 'YY',
  securityCode: ''
};

function CheckoutPayment({ history }) {
  const hadleFormSubmit = formValues => {
    history.push(CHECKOUT_REVIEW_PATH);
  };

  return (
    <Page title="Payment">
      <ErrorBoundary>
        <Formik initialValues={initialValues} validationSchema={checkoutPaymentValidation} onSubmit={hadleFormSubmit}>
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

export default CheckoutPayment;
