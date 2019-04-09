import React from 'react';
import { create } from 'react-test-renderer';

import Visa from '../Visa';

jest.mock('../../Icons', () => ({
  VisaCard: 'VisaCardIcon'
}));

describe('COMPONENT - Visa', () => {
  it('renders Visa component', () => {
    const component = create(<Visa />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders small Visa component', () => {
    const component = create(<Visa small />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
