/* global getRoutesMap:readonly */

import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from '../App';
import Cart from '../../Cart';
import Checkout from '../../Checkout';
import { CART, CHECKOUT } from '../../../constants/routes';

const shallowRender = () => shallow(<App />);

describe('COMPONENT - App', () => {
  it('renders self and correct routes', () => {
    const wrapper = shallowRender('/cart');
    const routesMap = getRoutesMap(wrapper);

    expect(wrapper.find(Route).length).toBe(2);
    expect(routesMap[CART]).toBe(Cart);
    expect(routesMap[CHECKOUT]).toBe(Checkout);
  });
});
