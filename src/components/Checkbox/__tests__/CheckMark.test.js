import React from 'react';
import { create } from 'react-test-renderer';

import CheckMark from '../CheckMark';

describe('COMPONENT - CheckMark', () => {
  it('renders CheckMark component', () => {
    const component = create(<CheckMark />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
