import React from 'react';
import { create } from 'react-test-renderer';

import TextHighlight from '../TextHighlight';

describe('COMPONENT - TextHighlight', () => {
  it('renders TextHighlight component', () => {
    const component = create(<TextHighlight />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
