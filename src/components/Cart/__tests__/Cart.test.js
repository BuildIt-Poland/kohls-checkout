import React from 'react';
import { create } from 'react-test-renderer';

import Cart from '../Cart';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - Cart', () => {
  it('renders Cart component', () => {
    const component = create(<Cart />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
