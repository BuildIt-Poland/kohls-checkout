import React from 'react';
import { create } from 'react-test-renderer';

import PaymentInformation from '../PaymentInformation';

jest.mock('react-router-dom', () => ({
  Link: 'MockedLink'
}));

describe('COMPONENT - PaymentInformation', () => {
  it('renders PaymentInformation component', () => {
    const component = create(<PaymentInformation />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
