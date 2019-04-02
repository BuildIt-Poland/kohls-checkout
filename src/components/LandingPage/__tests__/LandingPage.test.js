import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import LandingPage from '../LandingPage';

describe('COMPONENT - LandingPage', () => {
  it('renders correctly with 2 headlines of each section', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <LandingPage />
      </MemoryRouter>
    );

    expect(container.querySelectorAll('section h1')).toHaveLength(2);
  });
});
