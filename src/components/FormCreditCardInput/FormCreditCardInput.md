```js
import React from 'react';
import { Formik } from 'formik';

import FormCreditCardInput from '../FormCreditCardInput';

<>
  <Formik initialValues={{ cardNumber: '378282246310005' }}>
    <FormCreditCardInput name="cardNumber" label="American Express Card Number" />
  </Formik>

  <Formik initialValues={{ cardNumber: '5200828282828210' }}>
    <FormCreditCardInput name="cardNumber" label="MasterCard Number" />
  </Formik>

  <Formik initialValues={{ cardNumber: '4000056655665556' }}>
    <FormCreditCardInput name="cardNumber" label="Visa Card Number" />
  </Formik>
</>;
```
