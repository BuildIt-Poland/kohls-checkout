```js
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

const CartItemsList = connect(mapStateToProps)(ItemsList);

<CartItemsList />;
```
