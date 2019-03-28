/* global getRoutesMap:readonly */

import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import Checkout from '../Checkout';
import CheckoutDelivery from '../../CheckoutDelivery';
import CheckoutPayment from '../../CheckoutPayment';
import CheckoutReview from '../../CheckoutReview';
import { CHECKOUT_DELIVERY, CHECKOUT_PAYMENT, CHECKOUT_REVIEW } from '../../../constants/routes';

const shallowRender = () => shallow(<Checkout />);

describe('COMPONENT - Checkout', () => {
  it('renders self and correct routes', () => {
    const wrapper = shallowRender();
    const routesMap = getRoutesMap(wrapper);

    expect(wrapper.find(Route).length).toBe(3);
    expect(routesMap[CHECKOUT_DELIVERY]).toBe(CheckoutDelivery);
    expect(routesMap[CHECKOUT_PAYMENT]).toBe(CheckoutPayment);
    expect(routesMap[CHECKOUT_REVIEW]).toBe(CheckoutReview);
  });
});
