import '../../styles/sanitize.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import styled from 'styled-components';

import GlobalStyle from '../../components/GlobalStyle';
import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import configureStore from '../../store';

const ComponentsWrapper = styled.div`
  display: grid;
  gap: 15px;
`;

const initialState = {
  shippingAddress: {
    firstName: 'John',
    lastName: 'Doe',
    street: '123 Main St',
    city: 'Anytown',
    phone: '(541) 754-3010',
    state: 'CA',
    zipCode: '90210'
  },
  paymentInfo: {
    cardNumber: '5270708324803741',
    expMonth: 12,
    expYear: 24,
    securityCode: 111
  }
};

const store = configureStore(initialState);

class Wrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[CHECKOUT_PAYMENT_PATH]} initialIndex={1}>
          <GlobalStyle />
          <ComponentsWrapper>{this.props.children}</ComponentsWrapper>
        </MemoryRouter>
      </Provider>
    );
  }
}

export default Wrapper;
