import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Content from '../Content';

function InfoBanner({ children }) {
  return (
    <Wrapper role="banner">
      <Content>{children}</Content>
    </Wrapper>
  );
}

InfoBanner.propTypes = {
  /** The content to render within the InfoBanner */
  children: PropTypes.node.isRequired
};

export default InfoBanner;
