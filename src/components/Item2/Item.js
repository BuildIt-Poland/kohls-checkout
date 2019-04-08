import React from 'react';

import ListItem from './ListItem';
import Thumbnail from './Thumbnail';
import Name from './Name';
import Variants from './Variants';
import Prices from './Prices';

function Item({ name, imgUrl, variants, price, quantity }) {
  return (
    <ListItem>
      <Thumbnail src={imgUrl} alt={name} />
      <section>
        <Name>{name}</Name>
        <Variants variants={variants} />
        <Prices price={price} quantity={quantity} />
      </section>
    </ListItem>
  );
}

export default Item;
