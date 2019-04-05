import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => (props.small ? '44px' : '132px')};
  height: ${props => (props.small ? '66px' : '172px')};
`;

export default Wrapper;
