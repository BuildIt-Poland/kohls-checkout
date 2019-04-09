// Displaying item variants, assuming we've got color and size only

import React from 'react';
import PropTypes from 'prop-types';

import TextBlock from './TextBlock';
import SmallText from './SmallText';
import Label from './Label';

const NO_SIZE = 'No size';
const NO_COLOR = 'Multi/None';

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
  variants: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.string
  }).isRequired
};

export default Variants;
