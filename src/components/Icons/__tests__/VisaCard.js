import React from 'react';
import { create } from 'react-test-renderer';

import VisaCard from '../VisaCard';

describe('COMPONENT - Icons VisaCard', () => {
  it('renders correctly', () => {
    const component = create(<VisaCard />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
