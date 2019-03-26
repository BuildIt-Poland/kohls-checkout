import React from 'react';
import { Route } from 'react-router-dom';

function Checkout() {
  return (
    <section>
      <h2>Checkout component placeholder</h2>
      <Route path="/checkout/delivery" component={() => 'Checkout Delivery'} />
      <Route path="/checkout/payment" component={() => 'Checkout Payment'} />
      <Route path="/checkout/review" component={() => 'Checkout Review'} />
    </section>
  );
}

export default Checkout;
