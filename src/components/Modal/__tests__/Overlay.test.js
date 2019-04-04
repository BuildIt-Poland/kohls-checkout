import React from 'react';
import { create } from 'react-test-renderer';

import Overlay from '../Overlay';

describe('COMPONENT - Modal Overlay', () => {
  it('renders correctly', () => {
    const component = create(<Overlay />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
