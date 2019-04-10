// Displaying item variants, assuming we've got color and size only

import React from 'react';

import { NO_SIZE, NO_COLOR } from '../../constants/variants';
import { itemVariants } from '../../types';
import TextBlock from './TextBlock';
import SmallText from './SmallText';
import Label from './Label';

function Variants({ variants }) {
  return (
    <TextBlock>
      <SmallText>
        <Label>Size:</Label>
        {variants.size ? variants.size : NO_SIZE}
      </SmallText>
      <SmallText>
        <Label>Color:</Label>
        {variants.color ? variants.color : NO_COLOR}
      </SmallText>
    </TextBlock>
  );
}

Variants.propTypes = {
  variants: itemVariants.isRequired
};

export default Variants;
