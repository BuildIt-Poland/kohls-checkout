import fillFormInput from './fillFormInput';

export default function fillShippingForm() {
  fillFormInput('firstName', 'John');
  fillFormInput('lastName', 'Robinson');
  fillFormInput('street', 'Ocean Avenue');
  fillFormInput('city', 'New York');
  fillFormInput('state', 'NS');
  fillFormInput('zipCode', '07305');
  fillFormInput('phone', '2025550163');
}
