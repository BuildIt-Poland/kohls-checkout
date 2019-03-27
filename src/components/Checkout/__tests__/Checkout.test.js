/* global getRoutesMap:readonly */

import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import Checkout from '../Checkout';
import CheckoutDelivery from '../../CheckoutDelivery';
import CheckoutPayment from '../../CheckoutPayment';
import CheckoutReview from '../../CheckoutReview';

const shallowRender = () => shallow(<Checkout />);

describe('COMPONENTS - Checkout', () => {
  it('renders self and correct routes', () => {
    const wrapper = shallowRender();
    const routesMap = getRoutesMap(wrapper);

    expect(wrapper.find(Route).length).toBe(3);
    expect(routesMap['/checkout/delivery']).toBe(CheckoutDelivery);
    expect(routesMap['/checkout/payment']).toBe(CheckoutPayment);
    expect(routesMap['/checkout/review']).toBe(CheckoutReview);
  });
});
