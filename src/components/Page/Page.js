// Generic page wrapper
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Article = styled.article`
  padding-bottom: 12rem;
`;

const DEFAULT_TITLE = 'The Store';

function Page({ children, title }) {
  useEffect(() => {
    document.title = title ? `${DEFAULT_TITLE} | ${title}` : DEFAULT_TITLE;
  });

  return <Article>{children}</Article>;
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Page;
