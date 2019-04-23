import React from 'react';
import { render } from 'react-testing-library';

import ShippingDetails from '../ShippingDetails';

describe('COMPONENT - ShippingDetails', () => {
  it('paragraphs contain correct text', () => {
    const { container } = render(<ShippingDetails />);

    expect(container.querySelectorAll('p')[0]).toHaveTextContent('Items could only be shipped Standard');
    expect(container.querySelectorAll('p')[1]).toHaveTextContent('Ship to Me');
    expect(container.querySelectorAll('p')[2]).toHaveTextContent('Arrives between');
  });
});
