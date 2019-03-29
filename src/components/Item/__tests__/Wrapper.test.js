import React from 'react';
import renderer from 'react-test-renderer';

import Wrapper from '../Wrapper';

describe('COMPONENT - Wrapper', () => {
  it('render Wrapper component', () => {
    const component = renderer.create(<Wrapper />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
