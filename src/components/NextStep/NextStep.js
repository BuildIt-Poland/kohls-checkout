import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colorTurquoise, fontMedium, colorWhite } from '../../styles/designTokens';
import Wrapper from './Wrapper';

const Button = styled(Link)`
  background: ${colorTurquoise};
  color: ${colorWhite};
  display: block;
  font-size: ${fontMedium};
  font-weight: 600;
  padding: 1.2rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

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
