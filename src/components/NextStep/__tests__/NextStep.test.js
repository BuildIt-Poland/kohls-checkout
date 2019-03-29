import React from 'react';
import { create } from 'react-test-renderer';

import NextStep from '../NextStep';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - NextStep', () => {
  it('render NextStep component', () => {
    const component = create(<NextStep to="/" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
