import React from 'react';

import ScrollToTop from '../ScrollToTop';
import { render, cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('COMPONENT - ScrollToTop', () => {
  beforeEach(() => {
    global.scrollTo = jest.fn();
  });

  it('calls scrollTo with correct values', () => {
    const props = {
      location: {
        pathname: 'dummyPath'
      }
    };

    render(<ScrollToTop {...props}>dummy</ScrollToTop>);

    expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
