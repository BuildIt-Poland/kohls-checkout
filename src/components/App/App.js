import React from 'react';
import { Route } from 'react-router-dom';

import Headline from './Headline';
import Cart from '../Cart';
import Checkout from '../Checkout';

function App() {
  return (
    <section>
      <Headline>Hello Khol's</Headline>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout/:checkoutStep" component={Checkout} />
    </section>
  );
}

export default App;
