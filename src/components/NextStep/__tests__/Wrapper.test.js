import React from 'react';
import { create } from 'react-test-renderer';

import Wrapper from '../Wrapper';

describe('COMPONENT - NextStep Wrapper', () => {
  it('render NextStep component', () => {
    const component = create(<Wrapper />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
