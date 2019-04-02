import React from 'react';
import { create } from 'react-test-renderer';

import Button from '../Button';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - NextStep Button', () => {
  it('render NextStep component', () => {
    const component = create(<Button>Test</Button>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
