import DropDown from '../';
import React from 'react';
import { create } from 'react-test-renderer';

jest.mock('../../Icons', () => ({
  Chevron: 'Chevron'
}));

describe('DropDown', () => {
  describe('When DropDown is enabled', () => {
    it('Renders correctly the component', () => {
      const props = {
        label: 'Select Date',
        disabled: false,
        error: 'Error Message',
        options: [
          {
            label: 'MM',
            value: null
          },
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          }
        ]
      };

      const component = create(<DropDown {...props} />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('When DropDown is disabled', () => {
    it('Renders correctly the component', () => {
      const props = {
        label: 'Select Date',
        disabled: true,
        options: [
          {
            label: 'MM',
            value: null
          },
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          }
        ]
      };

      const component = create(<DropDown {...props} />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('When DropDown as an error', () => {
    it('Renders correctly the component', () => {
      const props = {
        label: 'Select Date',
        error: 'DummyError',
        options: [
          {
            label: 'MM',
            value: null
          },
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          }
        ]
      };

      const component = create(<DropDown {...props} />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
