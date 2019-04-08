import React from 'react';
import { create } from 'react-test-renderer';

import Input from '../Input.js';

describe('COMPONENT - Input', () => {
  describe('Input without error', () => {
    it('renders correctly Input', () => {
      const props = {
        label: 'Dummy Label',
        placeholder: 'Dummy placeHolder',
        type: 'text'
      };
      const component = create(<Input {...props} />);

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
      const component = create(<Input {...props} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('Input without label', () => {
    it('renders correctly Input', () => {
      const props = {
        placeholder: 'Dummy placeHolder',
        type: 'text'
      };
      const component = create(<Input {...props} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
