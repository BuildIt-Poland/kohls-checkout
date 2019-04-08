import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacingSmall, zIndexDefault } from '../../styles/designTokens';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${spacingSmall};
  height: 14.4rem;
`;

const Image = styled.img`
  width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 160, 160, 0.1);
  z-index: ${zIndexDefault};
`;

function Thumbnail({ src, alt }) {
  return (
    <Wrapper>
      <Overlay />
      <Image src={src} alt={alt} />
    </Wrapper>
  );
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Thumbnail;
