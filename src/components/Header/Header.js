import React from 'react';

import Layout from './Layout';
import Content from './Content';
import Logo from './Logo';

function Header() {
  return (
    <Layout>
      <Content>
        <Logo />
      </Content>
    </Layout>
  );
}

export default Header;
