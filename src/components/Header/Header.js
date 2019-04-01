// Default website header
import React from 'react';

import CartIcon from '../CartIcon';
import Layout from './Layout';
import Content from './Content';
import Logo from './Logo';

function Header() {
  return (
    <Layout>
      <Content>
        <Logo />
        <CartIcon />
      </Content>
    </Layout>
  );
}

export default Header;
