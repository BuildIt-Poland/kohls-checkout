import React from 'react';
import { create } from 'react-test-renderer';

import TextRow from '../TextRow';

describe('COMPONENT - OrderSummary TextRow', () => {
  it('render NextStep component', () => {
    const component = create(<TextRow />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
