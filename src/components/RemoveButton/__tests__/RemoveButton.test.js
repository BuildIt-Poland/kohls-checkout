import React from 'react';
import { create } from 'react-test-renderer';

import RemoveButton from '../RemoveButton';

describe('COMPONENT - RemoveButton', () => {
  it('renders RemoveButton component', () => {
    const component = create(<RemoveButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
