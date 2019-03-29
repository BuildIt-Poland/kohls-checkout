import React from 'react';
import { create } from 'react-test-renderer';

import ErrorBoundary from '../ErrorBoundary';

describe('COMPONENT - ErrorBoundary', () => {
  // Mocks
  let consoleErrorSpy;

  // Dummy components, for testing purposes
  function ChildComponent() {
    return <p>I'm child component!</p>;
  }

  function ComponentWithError() {
    throw new Error('Something went wrong...');
  }

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {
      // Allow suppressing error bounadry logs
    });
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
  });

  it('renders the child component if there is no error', () => {
    const component = create(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );
    const instance = component.getInstance();

    expect(component.toJSON()).toMatchSnapshot();
    expect(instance.state.hasError).toEqual(false);
  });

  it('renders fallback Error component if there is error', () => {
    const component = create(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    );
    const instance = component.getInstance();

    expect(component.toJSON()).toMatchSnapshot();
    expect(instance.state.hasError).toEqual(true);
  });
});
