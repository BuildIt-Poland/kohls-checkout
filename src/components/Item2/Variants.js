// Displaying item variants, assuming we've got color and size only

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextBlock from './TextBlock';
import SmallText from './SmallText';

const VariantName = styled.span`
  display: inline-block;
  width: 6rem;
`;

const NO_SIZE = 'No size';
const NO_COLOR = 'Multi/None';

function Variants({ variants }) {
  return (
    <TextBlock>
      <SmallText>
        <VariantName>Size:</VariantName>
        {variants.size ? variants.size : NO_SIZE}
      </SmallText>
      <SmallText>
        <VariantName>Color:</VariantName>
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
