import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 7;
`;

function Image({ src, title }) {
  return <Thumbnail src={src} alt={title} />;
}

export default Image;
