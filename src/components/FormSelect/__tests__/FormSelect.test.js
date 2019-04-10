import React from 'react';
import { create } from 'react-test-renderer';

import FormSelect from '../';
jest.mock('../../DropDown', () => 'DropDown');

describe('COMPONENT - FormSelect', () => {
  describe('FormSelect without error', () => {
    it('renders correctly FormSelect', () => {
      const props = {
        label: 'Dummy Label',
        placeholder: 'Dummy placeHolder',
        type: 'text'
      };
      const component = create(<FormSelect {...props} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('FormSelect with error', () => {
    it('renders correctly FormSelect', () => {
      const props = {
        label: 'Dummy Label',
        placeholder: 'Dummy placeHolder',
        type: 'text',
        error: 'dummyError'
      };
      const component = create(<FormSelect {...props} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
