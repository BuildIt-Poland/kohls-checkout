import React from 'react';
import renderer from 'react-test-renderer';

import ItemTitle from '../ItemTitle';

describe('COMPONENT - ItemTitle', () => {
  it('render ItemTitle component', () => {
    const component = renderer.create(<ItemTitle />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
