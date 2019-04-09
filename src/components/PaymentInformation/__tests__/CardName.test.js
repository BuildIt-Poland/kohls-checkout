import React from 'react';
import { create } from 'react-test-renderer';

import CardName, { creditCardName } from '../CardName';

describe('CardName', () => {
  describe('COMPONENT - CardName', () => {
    it('renders CardName component', () => {
      const component = create(<CardName cardNumber="5338876271187903" />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('METHOD - creditCardName', () => {
    it('returns string - Master Card', () => {
      const name = creditCardName('5338876271187903');

      expect(name).toBe('Master Card');
    });

    it('returns string - American Express', () => {
      const name = creditCardName('349061596855405');

      expect(name).toBe('American Express');
    });

    it('returns string - Visa', () => {
      const name = creditCardName('4485448764804164');

      expect(name).toBe('Visa');
    });

    it('returns null when card number is incorrect', () => {
      const name = creditCardName('6556');

      expect(name).toEqual(null);
    });
  });
});
