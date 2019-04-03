import 'jest-styled-components';
import 'jest-dom/extend-expect';

// Needed for renderWithRedux utility function
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';

import createStore from './store';

// Help with dealing with connected components
// You can provide initialState or the entire store that the UI is rendered with
global.renderWithRedux = (ui, { initialState, store = createStore(initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // Allows referencing store in tests
    store
  };
};
