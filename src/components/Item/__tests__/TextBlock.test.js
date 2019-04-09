import React from 'react';
import { create } from 'react-test-renderer';

import TextBlock from '../TextBlock';

describe('COMPONENT - Item TextBlock', () => {
  it('renders correctly', () => {
    const component = create(<TextBlock />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
