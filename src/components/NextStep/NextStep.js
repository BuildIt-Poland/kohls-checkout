import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './Button';
import Wrapper from './Wrapper';

function NextStep({ label = 'Next step', to, onMoveToNextStep }) {
  return (
    <Wrapper>
      {to ? (
        <Button as={Link} data-testid="next-step-button" to={to}>
          {label}
        </Button>
      ) : (
        <Button data-testid="next-step-button" onClick={onMoveToNextStep}>
          {label}
        </Button>
      )}
    </Wrapper>
  );
}

NextStep.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  moveToNextStep: PropTypes.func
};

export default NextStep;
