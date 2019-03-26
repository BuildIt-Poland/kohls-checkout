import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import Checkout from './Checkout';

const render = path =>
  mount(
    <Router initialEntries={[path]} keyLength={0}>
      <Checkout />
    </Router>
  );

describe('COMPONENTS - Checkout', () => {
  it('renders self and correct routes', () => {
    const wrapper = render('/checkout/delivery');

    expect(wrapper.find(Checkout)).toMatchSnapshot();
  });

  it('renders self and correct routes', () => {
    const wrapper = render('/checkout/payment');

    expect(wrapper.find(Checkout)).toMatchSnapshot();
  });

  it('renders self and correct routes', () => {
    const wrapper = render('/checkout/review');

    expect(wrapper.find(Checkout)).toMatchSnapshot();
  });
});
