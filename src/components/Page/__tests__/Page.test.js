import React from 'react';
import { create } from 'react-test-renderer';

import Page from '../Page';

describe('COMPONENT - Page', () => {
  it('renders correctly', () => {
    const component = create(
      <Page>
        <h1>Hello there!</h1>
      </Page>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
