import React from 'react';
import { create } from 'react-test-renderer';

import GlobalStyle from '../GlobalStyle';

describe('COMPONENT - GlobalStyle', () => {
  it('renders GlobalStyle component', () => {
    const component = create(<GlobalStyle />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
