import React from 'react';
import { create } from 'react-test-renderer';

import Checkbox from '../Checkbox';

describe('COMPONENT - Checkbox', () => {
  it('renders checked Checkbox component', () => {
    const component = create(<Checkbox checked={true} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('renders unchecked Checkbox component', () => {
    const component = create(<Checkbox checked={false} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
