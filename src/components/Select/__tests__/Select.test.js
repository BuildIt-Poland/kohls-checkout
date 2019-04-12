import React from 'react';
import { create } from 'react-test-renderer';

import Select from '../Select';

jest.mock('../../Icons/Chevron', () => 'Chevron');

const options = [
  {
    label: '1',
    value: '1'
  },
  {
    label: '2',
    value: '2'
  }
];

describe('Select', () => {
  describe('When Select is enabled', () => {
    it('Renders correctly the component', () => {
      const component = create(<Select value="MM" options={options} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('When Select is disabled', () => {
    it('Renders correctly the component', () => {
      const component = create(<Select value="MM" disabled="true" options={options} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('When Select as an error', () => {
    it('Renders correctly the component', () => {
      const component = create(<Select value="MM" error="true" options={options} />);

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
