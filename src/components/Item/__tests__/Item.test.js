import React from 'react';
import { create } from 'react-test-renderer';

import Item from '../Item';

describe('COMPONENT - Item', () => {
  it('renders Item component', () => {
    const component = create(<Item />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});