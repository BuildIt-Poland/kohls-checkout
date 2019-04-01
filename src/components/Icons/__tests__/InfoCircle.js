import React from 'react';
import { create } from 'react-test-renderer';

import InfoCircle from '../InfoCircle';

describe('COMPONENT - Icons InfoCircle', () => {
  it('renders correctly', () => {
    const component = create(<InfoCircle />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
