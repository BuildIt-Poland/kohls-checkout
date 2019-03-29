import React from 'react';
import { Route } from 'react-router-dom';

import { CHECKOUT, CART } from '../../constants/routes';
import Cart from '../Cart';
import Checkout from '../Checkout';
import Headline from './Headline';

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
