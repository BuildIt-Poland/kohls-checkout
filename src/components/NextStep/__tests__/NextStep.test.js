import React from 'react';
import renderer from 'react-test-renderer';

import NextStep from '../NextStep';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - NextStep', () => {
  it('render NextStep component', () => {
    const component = renderer.create(<NextStep />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
