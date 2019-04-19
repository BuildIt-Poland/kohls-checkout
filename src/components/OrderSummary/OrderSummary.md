```js
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

const OrderSummaryContainer = connect(mapStateToProps)(OrderSummary);


<OrderSummaryContainer />
```
