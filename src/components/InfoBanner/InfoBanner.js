import React from 'react';

import Layout from './Layout';
import Highlight from './Highlight';

function InfoBanner() {
  return (
    <Layout>
      You have received&nbsp;<Highlight>free shipping</Highlight>
    </Layout>
  );
}

export default InfoBanner;
