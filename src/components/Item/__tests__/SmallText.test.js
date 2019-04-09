import React from 'react';
import { create } from 'react-test-renderer';

import SmallText from '../SmallText';

describe('COMPONENT - Item SmallText', () => {
  it('renders correctly', () => {
    const component = create(<SmallText strikeOff />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
