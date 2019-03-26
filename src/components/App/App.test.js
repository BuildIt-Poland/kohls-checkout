import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import App from './App';
import Cart from '../Cart';
import Checkout from '../Checkout';

const render = path =>
  mount(
    <Router initialEntries={[path]} keyLength={0}>
      <App />
    </Router>
  );

describe('COMPONENTS - App', () => {
  it('renders self and correct routes', () => {
    const wrapper = render('/cart');

    expect(wrapper.find(App)).toMatchSnapshot();
  });

  it('renders self and correct routes', () => {
    const wrapper = render('/checkout/testStep');

    expect(wrapper.find(App)).toMatchSnapshot();
  });
});
