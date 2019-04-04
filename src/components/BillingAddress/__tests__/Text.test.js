import React from 'react';
import { create } from 'react-test-renderer';

import Text from '../Text';

describe('COMPONENT - Text', () => {
  it('renders Text component', () => {
    const component = create(<Text />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
