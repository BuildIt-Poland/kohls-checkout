import React from 'react';
import { Route } from 'react-router-dom';

import Headline from './Headline';
import Cart from '../Cart';
import Checkout from '../Checkout';
import { CHECKOUT, CART } from '../../constants/routes';

function App() {
  return (
    <section>
      <Headline>Hello world</Headline>
      <Route exact path={CART} component={Cart} />
      <Route exact path={CHECKOUT} component={Checkout} />
    </section>
  );
}

export default App;
