import React from 'react';
import renderer from 'react-test-renderer';

import PriceBox from '../PriceBox';

describe('COMPONENT - PriceBox', () => {
  it('render PriceBox component', () => {
    const component = renderer.create(<PriceBox />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
