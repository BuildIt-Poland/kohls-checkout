// Root of application
// Home of various root providers (such as redux or router) and css global styles

import '../../styles/sanitize.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from '../App';
import GlobalStyle from '../GlobalStyle';
import theme from '../../styles/theme';

function Root({ store }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
