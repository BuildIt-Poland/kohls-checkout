import styled from 'styled-components';

import { colorBlack, fontSmall } from '../../styles/designTokens';

const RemoveButton = styled.button`
  border: 0;
  background: none;
  color: ${colorBlack};
  text-decoration: underline;
  font-size: ${fontSmall};
  grid-column-start: ${props => (props.editableQuantity ? 3 : 2)};
  text-align: ${props => (props.editableQuantity ? 'right' : 'left')};
  padding: 0;
`;

export default RemoveButton;
