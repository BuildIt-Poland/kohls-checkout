import React from 'react';
import { create } from 'react-test-renderer';

import TextLink from '../TextLink';

describe('COMPONENT - TextLink', () => {
  it('renders correctly', () => {
    const component = create(<TextLink />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
