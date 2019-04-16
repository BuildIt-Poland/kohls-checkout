import * as Yup from 'yup';

const checkoutPaymentValidation = Yup.object().shape({
  cardHolderName: Yup.string()
    .min(3, 'Too short!')
    .required('Required'),
  cardNumber: Yup.string()
    .matches(/^[^A-Z^a-z]*$/, 'Only numbers allowed')
    .min(13, 'Too short!')
    .max(16, 'Too long!')
    .required('Required'),
  expMonth: Yup.string()
    .matches(/^((?!MM).)*$/, 'Required')
    .required('Required'),
  expYear: Yup.string()
    .matches(/^((?!YY).)*$/, 'Required')
    .required('Required'),
  securityCode: Yup.string()
    .min(3, 'Too short!')
    .max(4, 'Too long!')
    .required('Required')
});

export default checkoutPaymentValidation;
