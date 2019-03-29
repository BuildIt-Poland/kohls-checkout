import React from 'react';
import renderer from 'react-test-renderer';

import QuantityInput from '../QuantityInput';

describe('COMPONENT - QuantityInput', () => {
  it('render QuantityInput component', () => {
    const component = renderer.create(<QuantityInput />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
