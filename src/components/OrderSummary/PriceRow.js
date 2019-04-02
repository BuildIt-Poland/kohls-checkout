import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  margin: 0;
`;

function PriceRow({ children }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default PriceRow;
