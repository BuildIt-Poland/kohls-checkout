import * as Yup from 'yup';

const shippingAddressValidation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  state: Yup.string()
    .matches(/^[A-Za-z]{2}$/, 'Not correct state!')
    .required('Required'),
  zipCode: Yup.string()
    .min(2, 'Too short!')
    .max(15, 'Too long!')
    .required('Required'),
  phone: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required')
});

export default shippingAddressValidation;
