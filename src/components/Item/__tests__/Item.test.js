import React from 'react';
import renderer from 'react-test-renderer';

import Item from '../Item';

describe('COMPONENT - Item', () => {
  it('render Item component', () => {
    const component = renderer.create(<Item />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
