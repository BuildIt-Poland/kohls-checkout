import React from 'react';
import { create } from 'react-test-renderer';

import Modal from '../Modal';

jest.mock('../../Icons', () => ({
  Cross: 'Cross'
}));
jest.mock('../CloseButton', () => 'CloseButton');
jest.mock('../Overlay', () => 'Overlay');
jest.mock('../Header', () => 'Header');

describe('COMPONENT - Modal', () => {
  it('renders Modal component with default title', () => {
    const component = create(<Modal>Test</Modal>);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders Modal component with defined title', () => {
    const component = create(<Modal title="Defined Modal Title">Test</Modal>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
