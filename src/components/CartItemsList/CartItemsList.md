```js
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

const ItemsList = connect(mapStateToProps)(CartItemsList);

<ItemsList />;
```
