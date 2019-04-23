This section contains the **The Store** logo but it can also have additional logos.

### Logo guidelines

- Place the logo on white background
- Never place the logo on images
- When positioning the logo beside elements, ensure there is enough clear space
- Don't add additional shadows or effects, modify colors or change orientation

It can be imported into the codebase like this:

`import { Logo } from '../Icons';`

```jsx noeditor
import styled from 'styled-components'

import { Logo } from '../../components/Icons';
import { colorLightGrey } from '../../styles/designTokens.js';

const LogoWrapper = styled.div`
  border: 1px solid ${colorLightGrey};
  padding: 30px;
  border-radius: 8px;
`;

<LogoWrapper>
  <Logo />
</LogoWrapper>
```
