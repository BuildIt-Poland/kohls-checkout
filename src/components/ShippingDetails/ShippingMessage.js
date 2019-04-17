import styled from 'styled-components';
import { spacingSmall } from '../../styles/designTokens';

const ShippingMessage = styled.div`
  flex-grow: 1;
  padding: 0 ${spacingSmall};
  > p {
    margin: 0;
  }
`;

export default ShippingMessage;
