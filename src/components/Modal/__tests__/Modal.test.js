import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Modal from '../Modal';

afterEach(cleanup);

describe('COMPONENT - Modal', () => {
  it('renders Modal component with default title', () => {
    const { container } = render(<Modal>Test</Modal>);

    expect(container).toMatchSnapshot();
  });

  it('renders Modal component with defined title', () => {
    const { container } = render(<Modal title="Defined Modal Title">Test</Modal>);

    expect(container).toMatchSnapshot();
  });
});
