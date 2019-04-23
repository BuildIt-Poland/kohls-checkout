`import { IconName } from '../Icons';`

```jsx noeditor
import styled from 'styled-components';

import { colorLightGrey } from '../../styles/designTokens'
import { Chevron, Cross, Cart, InfoCircle, Shipping, Tick } from '../../components/Icons';

const IconsWrapper = styled.div`
  border: 1px solid ${colorLightGrey};
  padding: 20px;
  border-radius: 8px;
  display: flex;
`;

const IconWrapper = styled.div`
  height: 40px;
  svg {
    height: 100%;
  }
`;

const Container = styled.div`
  width: 20%;
  margin: 0;
  text-align: center;
`;

const IconLabel = styled.p`
  margin: 0;
`;

const icons = [
  {
    component: <Cart />,
    name: 'Cart'
  },
  {
    component: <Chevron />,
    name: 'Chevron'
  },
  {
    component: <Cross />,
    name: 'Cross'
  },
  {
    component: <InfoCircle />,
    name: 'InfoCircle'
  },
  {
    component: <Shipping />,
    name: 'Shipping'
  },
  {
    component: <Tick />,
    name: 'Tick'
  }
];

const iconElements = icons.map(Icon => {
  return (
    <Container key={Icon.name}>
      <IconWrapper>{Icon.component}</IconWrapper>
      <IconLabel>{Icon.name}</IconLabel>
    </Container>
  );
});

<IconsWrapper>{iconElements}</IconsWrapper>;
```
