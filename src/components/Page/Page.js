// Generic page wrapper
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { spacingLarge } from '../../styles/designTokens';

const Article = styled.article`
  padding-top: ${spacingLarge};
  padding-bottom: 12rem;
`;
const DEFAULT_TITLE = 'The Store';

function Page({ children, title }) {
  useEffect(() => {
    document.title = title ? `${DEFAULT_TITLE} | ${title}` : DEFAULT_TITLE;
  });

  return <Article>{children}</Article>;
}

export default Page;
