import React from 'react';
import { create } from 'react-test-renderer';

import ListItem from '../ListItem';

describe('COMPONENT - Item ListItem', () => {
  it('renders correctly', () => {
    const component = create(<ListItem />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
