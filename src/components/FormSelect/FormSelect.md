```js
import React from 'react';
import { create } from 'react-test-renderer';
import { Formik } from 'formik';

import FormSelect from '../FormSelect';

const options = [
  {
    value: 'Alabama',
    label: 'AL'
  },
  {
    value: 'Missouri',
    label: 'MO'
  },
  {
    value: 'Wyoming',
    label: 'WY',
    disabled: true
  }
];

<Formik initialValues={{ city: 'MO' }}>
  <>
    <FormSelect name="state" label="State" options={options} />
    <FormSelect name="state" label="State" options={options} error />
    <FormSelect name="state" label="State" options={options} disabled />
  </>
</Formik>;
```
