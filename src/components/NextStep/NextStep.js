import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';
import Button from './Button';
import Wrapper from './Wrapper';

function NextStep({ label = 'Next step', to, onMoveToNextStep, disabled }) {
  const renderButtonOrLink = () => {
    if (to) {
      return (
        <Button as={Link} data-testid="next-step-button" to={to} disabled={disabled}>
          {label}
        </Button>
      );
    } else if (onMoveToNextStep) {
      return (
        <Button data-testid="next-step-button" onClick={onMoveToNextStep} disabled={disabled}>
          {label}
        </Button>
      );
    } else {
      throw new Error("You must provided either 'to' or 'onMoveToNextStep' prop.");
    }
  };
  return (
    <ErrorBoundary>
      <Wrapper>{renderButtonOrLink()}</Wrapper>
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
