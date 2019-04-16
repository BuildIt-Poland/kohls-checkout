import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';
import Button from './Button';
import Wrapper from './Wrapper';

function NextStep({ label = 'Next step', to, onMoveToNextStep, disabled }) {
  // Render link if 'to' prop is passed, button with handler otherwise

  const props = {
    ...(to ? { as: Link, to } : { onClick: onMoveToNextStep })
  };

  return (
    <ErrorBoundary>
      <Wrapper>
        <Button data-testid="next-step-button" disabled={disabled} {...props}>
          {label}
        </Button>
      </Wrapper>
    </ErrorBoundary>
  );
}

NextStep.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  moveToNextStep: PropTypes.func,
  disabled: PropTypes.bool
};

export default NextStep;
