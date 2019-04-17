```js
import styled from 'styled-components';

import Chevron from './Chevron';
import Cross from './Cross';
import Cart from './Cart';
import InfoCircle from './InfoCircle';
import Shipping from './Shipping';
import Tick from './Tick';
import MasterCard from './MasterCard';
import AmexCard from './AmexCard';
import VisaCard from './VisaCard';

const IconsWrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  width: 20%;
  margin: 0;
  text-align: center;
`;

const IconLabel = styled.p`
  margin: 5px;
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
    <IconWrapper key={Icon.name}>
      {Icon.component}
      <IconLabel>{Icon.name}</IconLabel>
    </IconWrapper>
  );
});

<IconsWrapper>{iconElements}</IconsWrapper>;
```
