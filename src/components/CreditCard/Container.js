import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(4, 1fr) 5%;
  grid-template-rows: 1fr;
  grid-gap: 0.5rem;
  grid-template-areas: 'expMonth expMonth expYear cvv cvvIcon';
`;
Container.displayName = 'Container';

export default Container;
