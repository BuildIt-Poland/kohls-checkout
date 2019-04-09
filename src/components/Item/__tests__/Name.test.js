import React from 'react';
import { create } from 'react-test-renderer';

import Name from '../Name';

describe('COMPONENT - Item Name', () => {
  it('renders correctly', () => {
    const component = create(<Name>Denim Jacket</Name>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
