import React from 'react';
import { shallow } from 'enzyme';

import Cart from './Cart';

const shallowRender = () => shallow(<Cart />);

describe('COMPONENTS - Cart', () => {
  it('render Cart component', () => {
    const wrapper = shallowRender();

    expect(
      wrapper.contains(
        <section>
          <h2>Cart placeholder</h2>
        </section>
      )
    ).toBe(true);
  });
});
