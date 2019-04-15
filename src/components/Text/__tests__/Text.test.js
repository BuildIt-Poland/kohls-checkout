import React from 'react';
import { create } from 'react-test-renderer';

import { colorBlack, colorDarkGrey, colorTurquoiseDimmed } from '../../../styles/designTokens';
import Text, { fontColor } from '../Text';

describe('COMPONENT - Text', () => {
  it('renders Text component', () => {
    const component = create(<Text />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('FUNC - fontColor', () => {
  it("return proper color if 'highlight' is passed", () => {
    expect(fontColor({ highlight: true })).toEqual(colorTurquoiseDimmed);
  });

  it("return proper color if 'dimmed' is passed", () => {
    expect(fontColor({ dimmed: true })).toEqual(colorDarkGrey);
  });

  it("return proper color if both 'highlight' and 'dimmed' are passed", () => {
    expect(fontColor({ highlight: true, dimmed: true })).toEqual(colorTurquoiseDimmed);
  });

  it("return proper color if 'highlight' is passed", () => {
    expect(fontColor({ highlight: false, dimmed: false })).toEqual(colorBlack);
  });
});
