import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import Wrapper from '../Wrapper';

describe('COMPONENT - Error Wrapper', () => {
  it('render Cart component', () => {
    const component = create(<Wrapper />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
