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

  it('renders Modal component after clicking ModalTrigger', async () => {
    const { getByTestId } = render(
      <ModalTrigger content="Test Content" title="Test Modal Title">
        Trigger
      </ModalTrigger>
    );

    fireEvent.click(getByTestId('modal-trigger'));

    expect(getByTestId('modal-header')).toHaveTextContent('Test Modal Title');
    expect(getByTestId('modal-body')).toHaveTextContent('Test Content');
  });
});
