import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import ModalTrigger from '../ModalTrigger';

describe('COMPONENT - ModalTrigger', () => {
  it('renders ModalTrigger with closed Modal', () => {
    const { container } = render(
      <ModalTrigger content="Test Content" title="Test Modal Title">
        Trigger
      </ModalTrigger>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders ModalTrigger component', async () => {
    const { container, getByText, unmount } = render(
      <ModalTrigger content="Test Content" title="Test Modal Title">
        Trigger
      </ModalTrigger>,
      { container: document.body }
    );

    fireEvent.click(getByText('Trigger'));

    expect(container).toMatchSnapshot();
    unmount();
  });
});
