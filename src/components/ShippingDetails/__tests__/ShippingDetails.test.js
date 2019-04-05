import React from 'react';
import { create } from 'react-test-renderer';

import ShippingDetails from '../ShippingDetails';

jest.mock('../../Icons/Shipping', () => 'Shipping');

describe('COMPONENT - ShippingDetails', () => {
  it('Renders correctly ShippingDetails component', () => {
    const props = {
      minDate: 'Tue. 02 19',
      maxDate: 'Wed. 03. 19',
      shippingPromo: 'Free after $85'
    };

    const component = create(<ShippingDetails {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('When there is no shippingPromo', () => {
    it('Renders correctly ShippingDetails component without shipping promo', () => {
      const props = {
        minDate: 'Tue. 02 19',
        maxDate: 'Wed. 03. 19',
        shippingPromo: null
      };

      const component = create(<ShippingDetails {...props} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
