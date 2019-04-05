import React from 'react';
import { create } from 'react-test-renderer';

import Input from '../Input.js';

describe('COMPONENT - Input', () => {
  describe('Input without error', () => {
    let component;

    beforeEach(() => {
      const props = {
        label: 'Dummy Label',
        placeholder: 'Dummy placeHolder',
        type: 'text'
      };

      component = create(<Input {...props} />);
    });

    afterEach(() => {
      component.unmount();
    });

    it('renders correctly Input', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('Input with error', () => {
    let component;

    beforeEach(() => {
      const props = {
        label: 'Dummy Label',
        placeholder: 'Dummy placeHolder',
        type: 'text',
        error: 'dummyError'
      };

      component = create(<Input {...props} />);
    });

    afterEach(() => {
      component.unmount();
    });

    it('renders correctly Input', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('Input without label', () => {
    let component;

    beforeEach(() => {
      const props = {
        placeholder: 'Dummy placeHolder',
        type: 'text'
      };
      component = create(<Input {...props} />);
    });

    afterEach(() => {
      component.unmount();
    });

    it('renders correctly Input', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
