```js
const props = {
  options: [
    {
      label: 'Alabama',
      value: 'AL'
    },
    {
      label: 'Hawaii',
      value: 'HI'
    },
    {
      label: 'Oklahoma',
      value: 'OK'
    }
  ]
};

<>
  <Select {...props} />
  <Select {...props} disabled />
  <Select {...props} error />
</>;
```
