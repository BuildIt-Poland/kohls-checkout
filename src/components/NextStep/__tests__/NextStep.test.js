import React from 'react';
import { create } from 'react-test-renderer';

import NextStep from '../NextStep';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - NextStep', () => {
  it('renders Link if to prop is provided', () => {
    const component = create(<NextStep to="/cart" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render button if onMoveToNextStep handler is provided', () => {
    const component = create(<NextStep onMoveToNextStep={jest.fn()} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
