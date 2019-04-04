import React from 'react';
import { create } from 'react-test-renderer';

import CloseButton from '../CloseButton';

describe('COMPONENT - Modal CloseButton', () => {
  it('renders correctly', () => {
    const component = create(<CloseButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
