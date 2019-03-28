// Generic error component

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function Error({ message }) {
  return <Wrapper>{message}</Wrapper>;
}

Error.defaultProps = {
  message: 'Oops, something went wrong.'
};

Error.propTypes = {
  message: PropTypes.string
};

export default Error;
