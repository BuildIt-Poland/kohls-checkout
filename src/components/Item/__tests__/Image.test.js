import React from 'react';
import renderer from 'react-test-renderer';

import Image from '../Image';

describe('COMPONENT - Image', () => {
  it('render Image component', () => {
    const component = renderer.create(<Image />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
