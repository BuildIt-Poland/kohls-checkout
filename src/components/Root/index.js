// Root of application
// Home of various root providers (such as redux or router) and css global styles

import '../../styles/sanitize.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App from '../App';
import GlobalStyle from '../GlobalStyle';

function Root({ store }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
