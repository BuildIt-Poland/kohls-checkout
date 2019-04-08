import React from 'react';
import { create } from 'react-test-renderer';

import Input from '../Input.js';

describe('COMPONENT - Input', () => {
  it('renders correctly Input', () => {
    const props = {
      placeholder: 'Dummy placeHolder',
      type: 'text'
    };
    const component = create(<Input {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
