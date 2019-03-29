import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

import Error from '../Error';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error) {
    this.setState({ hasError: true });

    // Send captured errors to Sentry
    Sentry.captureException(error);
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
