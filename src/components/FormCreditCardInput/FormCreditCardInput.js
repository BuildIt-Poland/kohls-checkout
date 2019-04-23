import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../FormInput';
import Icon from './Icon';

function FormCreditCardInput(props) {
  return <FormInput {...props} icon={Icon} />;
}

FormCreditCardInput.propTypes = {
  /** Specifies the name of an input element */
  name: PropTypes.string.isRequired,
  /** Specifies the text of a label element */
  label: PropTypes.string.isRequired
};

export default FormCreditCardInput;
