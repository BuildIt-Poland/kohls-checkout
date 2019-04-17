```js
import noop from 'lodash.noop';

<>
  <Checkbox onChange={noop}>Item unchecked</Checkbox>
  <Checkbox checked onChange={noop}>
    Item checked
  </Checkbox>
  <Checkbox onChange={noop} disabled>
    Item disabled
  </Checkbox>
</>;
```
