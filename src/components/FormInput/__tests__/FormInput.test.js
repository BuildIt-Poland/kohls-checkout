import React from 'react';
import { create } from 'react-test-renderer';

import FormInput from '../FormInput.js';
jest.mock('../../Input', () => 'Input');

describe('COMPONENT - FormInput', () => {
  describe('FormInput without error', () => {
    it('renders correctly FormInput', () => {
      const props = {
        label: 'Dummy Label',
        placeholder: 'Dummy placeHolder',
        type: 'text'
      };
      const component = create(<FormInput {...props} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('Input with error', () => {
    it('renders correctly Input', () => {
      const props = {
        label: 'Dummy Label',
        placeholder: 'Dummy placeHolder',
        type: 'text',
        error: 'dummyError'
      };
      const component = create(<FormInput {...props} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('Input without label', () => {
    it('renders correctly Input', () => {
      const props = {
        placeholder: 'Dummy placeHolder',
        type: 'text'
      };
      const component = create(<FormInput {...props} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
