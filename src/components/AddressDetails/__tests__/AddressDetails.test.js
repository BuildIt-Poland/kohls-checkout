import React from 'react';
import { create } from 'react-test-renderer';

import AddressDetails from '../AddressDetails';

jest.mock('../../SectionHeader', () => 'SectionHeader');

describe('COMPONENT - AddressDetails', () => {
  it('renders AddressDetails component', () => {
    const address = {
      firstName: 'Taylor',
      lastName: 'Swift',
      street: '228 Park Ave S',
      city: 'New Orlean',
      state: 'NO',
      zipCode: '10003-1502',
      phone: '444 444 444'
    };

    const component = create(<AddressDetails title="Address" address={address} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
