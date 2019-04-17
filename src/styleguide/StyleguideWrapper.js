import '../styles/sanitize.css';

import styled from 'styled-components';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import GlobalStyle from '../components/GlobalStyle';
import { CHECKOUT_PAYMENT_PATH } from '../constants/routes';
import configureStore from '../store';

const ComponentsWrapper = styled.div`
  display: grid;
  gap: 30px;
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
  }
};
const store = configureStore(initialState);

export default class Wrapper extends Component {
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
