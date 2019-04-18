```js
import React from 'react';
import { Formik } from 'formik';

import { MasterCard } from '../Icons';
import FormInput from './FormInput';

const props = {
  name: 'firstName',
  label: 'First Name',
  placeholder: 'Type first name here...',
  type: 'text'
};

<Formik initialValues={{ firstName: '' }}>
  <>
    <FormInput {...props} />
    <FormInput {...props} error />
    <FormInput {...props} disabled />
  </>
</Formik>;
```
