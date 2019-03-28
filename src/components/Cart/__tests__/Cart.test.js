import React from 'react';
import renderer from 'react-test-renderer';

import Cart from '../Cart';
jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - Cart', () => {
  it('render Cart component', () => {
    const component = renderer.create(<Cart />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
