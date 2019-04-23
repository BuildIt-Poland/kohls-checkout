import React from 'react';
import { create } from 'react-test-renderer';

import ScreenWideSection from '../ScreenWideSection';

describe('COMPONENT - ScreenWideSection', () => {
  it('render NextStep component', () => {
    const component = create(<ScreenWideSection />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
