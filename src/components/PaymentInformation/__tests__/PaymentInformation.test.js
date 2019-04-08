import React from 'react';
import { render } from 'react-testing-library';

import PaymentInformation from '../PaymentInformation';

jest.mock('react-router-dom', () => ({
  Link: 'MockedLink'
}));

describe('COMPONENT - PaymentInformation', () => {
  it('renders PaymentInformation component', () => {
    const { container } = render(<PaymentInformation />);

    expect(container.querySelector('h2')).toHaveTextContent('Payment Information');
  });
});
