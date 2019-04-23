<style>
.typography-table { width: 100%; }

.typography-table th {
  border-bottom: 1px solid #CCC;
  background-color: #F4F4F4;
  height: 40px;
}
.typography-table td {
  border-bottom: 1px solid #CCC;
  text-align: center;
  height: 50px;
}
.typography-table .first {
  background-color: #F4F4F4;
}
</style>

```jsx noeditor
import styled from 'styled-components';
import { fontSmall, fontMedium, fontLarge, fontXLarge, fontWeightBold, fontWeightNormal } from '../../styles/designTokens';

import Text from '../../components/Text';

const H1 = styled.h1`
  font-size: ${fontXLarge};
  font-weight: ${fontWeightBold};
`;

const H2 = styled.h2`
  font-size: ${fontLarge};
  font-weight: ${fontWeightBold};
`;

const H3 = styled.h3`
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
`;

const Caption = styled.span`
  font-size: ${fontSmall};
  font-weight: ${fontWeightNormal};
`;

<div>
  <table className="typography-table">
    <thead>
      <tr>
        <th style={{ minWidth: '80px' }} />
        <th>All screens</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="first">H1</td>
        <td>
          <H1>Bold 3 rem</H1>
        </td>
      </tr>
      <tr>
        <td className="first">H2</td>
        <td>
          <H2>Bold 2.4 rem</H2>
        </td>
      </tr>
      <tr>
        <td className="first">H3</td>
        <td>
          <H3>Bold 1.8 rem</H3>
        </td>
      </tr>
      <tr>
        <td className="first">Body</td>
        <td>
          <Text>Basic 1.8 rem</Text>
          <Text dimmed>Dimmed 1.8 rem</Text>
          <Text bold>Bold 1.8 rem</Text>
          <Text highlight>Highlight 1.8 rem</Text>
          <Text highlight bold>
            Bold highlight 1.8 rem
          </Text>
          <Text underline>Underline 1.8 rem</Text>
        </td>
      </tr>
      <tr>
        <td className="first">Caption</td>
        <td>
          <Caption>Normal 1.4 rem</Caption>
        </td>
      </tr>
    </tbody>
  </table>
</div>;
```
