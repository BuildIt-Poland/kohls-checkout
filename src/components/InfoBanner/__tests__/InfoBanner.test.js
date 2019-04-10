import React from 'react';
import { create } from 'react-test-renderer';

import InfoBanner from '../InfoBanner';

describe('COMPONENT - infoBanner', () => {
  it('renders correctly', () => {
    const component = create(<InfoBanner>You have received free shipping!</InfoBanner>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
