import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => (props.small ? '40px' : '132px')};
`;

export default Wrapper;
