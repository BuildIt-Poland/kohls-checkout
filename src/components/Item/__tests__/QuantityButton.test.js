import React from 'react';
import renderer from 'react-test-renderer';

import QuantityButton from '../QuantityButton';

describe('COMPONENT - QuantityButton', () => {
  it('render QuantityButton component', () => {
    const component = renderer.create(<QuantityButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
