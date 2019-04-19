```js
import noop from 'lodash.noop';

const props = {
  id: 'test-id-123',
  quantity: 1,
  increaseQuantity: noop,
  decreaseQuantity: noop,
  removeItem: noop
};

<CartItemControls {...props} />
```
