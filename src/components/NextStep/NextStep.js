import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Wrapper from './Wrapper';

function NextStep({ label = 'Next step', to }) {
  return (
    <Wrapper>
      <Button to={to}>{label}</Button>
    </Wrapper>
  );
}

NextStep.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string.isRequired
};

export default NextStep;
