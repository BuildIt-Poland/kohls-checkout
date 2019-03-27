import React from 'react';

import Counter from '../Counter';
import Headline from './Headline';
import Item from '../Item/Item';

function App() {
  return (
    <section>
      <Headline>Hello!</Headline>
      <Counter />
      <Item />
    </section>
  );
}

export default App;
