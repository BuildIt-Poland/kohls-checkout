import React from 'react';
import { create } from 'react-test-renderer';

import CardName from '../CardName';

describe('COMPONENT - CardName', () => {
  it('renders CardName component', () => {
    const component = create(<CardName />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders CardName component for MasterCard', () => {
    const component = create(<CardName cardNumber="5338876271187903" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders CardName component for American Express', () => {
    const component = create(<CardName cardNumber="349061596855405" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders CardName component for Visa', () => {
    const component = create(<CardName cardNumber="4485448764804164" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
