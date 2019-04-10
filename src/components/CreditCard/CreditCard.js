import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes, { css } from 'prop-types';
import { generateMonths, generateYears } from './utils/optionsBuilder';
import { getPotentialCardRules, isNumber } from './utils/cardRules';

import Container from './Container';
import Label from './Label';
import CreditCardIcon from './CreditCardIcon';
import CardNumber from './CardNumber';
import Content from '../Content';
import SectionHeader from '../SectionHeader';
import ModalTrigger from '../ModalTrigger';
import Text from '../Text';
import Input from '../Input';
import DropDown from '../DropDown';
import QuestionIcon from '../QuestionIcon';

const modalTrigger = (
  <ModalTrigger title="Order payment options" content="">
    <Text underline>Open Modal</Text>
  </ModalTrigger>
);

const ExpMonth = styled(DropDown)`
  grid-area: expMonth;
`;
ExpMonth.displayName = 'ExpMonth';

const ExpYear = styled(DropDown)`
  grid-area: expYear;
`;
ExpYear.displayName = 'ExpYear';

const SecurityCode = styled(Input)`
  grid-area: cvv;
`;
SecurityCode.displayName = 'SecurityCode';

class CreditCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumberInput: {
        name: 'cardNumber',
        label: 'Card number',
        placeholder: 'Enter card number',
        cardType: null,
        maxLength: 16
      },
      expMonthInput: {
        name: 'expMonth',
        defaultValue: 'MM',
        label: 'Exp. Month',
        options: generateMonths()
      },
      expYearInput: {
        name: 'expYear',
        defaultValue: 'YY',
        label: 'Exp. Year',
        options: generateYears()
      },
      securityCodeInput: {
        label: 'Security Code',
        placeholder: '3 digits',
        maxLength: 3,
        type: 'password',
        name: 'securityCode'
      },
      showContainer: false
    };

    this.handleInputChange.bind(this.handleInputChange);
  }

  _handleCreditCardInputRules = inputValue => {
    const rules = getPotentialCardRules(inputValue);

    if (rules) {
      this.setState(prevState => ({
        ...prevState,
        cardNumberInput: {
          ...prevState.cardNumberInput,
          maxLength: rules.maxLength,
          cardType: rules.type
        },
        showContainer: true,
        securityCodeInput: {
          ...prevState.securityCodeInput,
          maxLength: rules.securityCode.size,
          placeholder: rules.securityCode.size === 3 ? '3 digits' : '4 digits'
        }
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        cardNumberInput: {
          ...prevState.cardNumberInput,
          maxLength: 16,
          cardType: null
        },
        showContainer: false
      }));
    }
  };

  handleInputChange = e => {
    const inputValue = String(e.target.value).trim();
    const inputName = e.target.name;

    if (inputValue && !isNumber(inputValue)) {
      return;
    }

    const { cardNumberInput, expMonthInput, expYearInput, securityCodeInput } = this.state;
    const { expMonth, expYear, securityCode, creditCard } = this.props;

    switch (inputName) {
      case cardNumberInput.name:
        this._handleCreditCardInputRules(inputValue);
        creditCard && creditCard.onChange && creditCard.onChange(e);
        break;
      case expMonthInput.name:
        expMonth && expMonth.onChange && expMonth.onChange(e);
        break;
      case expYearInput.name:
        expYear && expYear.onChange && expYear.onChange(e);
        break;
      case securityCodeInput.name:
        securityCode && securityCode.onChange && securityCode.onChange(e);
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    this._handleCreditCardInputRules(this.props.creditCard.value);
  }

  render() {
    const { helpUrl, paymentTypeHelpUrl, expMonth, expYear, securityCode, creditCard } = this.props;
    const { cardNumberInput, showContainer, expMonthInput, expYearInput, securityCodeInput } = this.state;

    return (
      <Content>
        <SectionHeader actionElement={modalTrigger}>Enter your card info</SectionHeader>
        <Label>
          {'Enter your card info'}
          <QuestionIcon target="_blank" href={helpUrl} />
        </Label>
        <CardNumber
          type="tel"
          name={cardNumberInput.name}
          maxLength={cardNumberInput.maxLength}
          placeholder={cardNumberInput.label}
          onChange={this.handleInputChange}
          label={cardNumberInput.label}
          icon={<CreditCardIcon type={cardNumberInput.cardType} />}
          error={creditCard.error}
          value={creditCard.value}
        />
        {showContainer && (
          <Container>
            <ExpMonth
              defaultValue={expMonthInput.defaultValue}
              name={expMonthInput.name}
              options={expMonthInput.options}
              label={expMonthInput.label}
              onChange={this.handleInputChange}
              value={expMonthInput.value}
              error={expMonth.error}
            />
            <ExpYear
              defaultValue={expYearInput.defaultValue}
              name={expYearInput.name}
              options={expYearInput.options}
              label={expYearInput.label}
              onChange={this.handleInputChange}
              value={expYearInput.value}
              error={expYear.error}
            />
            <SecurityCode
              type={securityCodeInput.type}
              name={securityCodeInput.name}
              maxLength={securityCodeInput.maxLength}
              placeholder={securityCodeInput.placeholder}
              label={securityCodeInput.label}
              onChange={this.handleInputChange}
              error={securityCode.error}
            />
            {/* <CvvIcon target="_blank" href={paymentTypeHelpUrl} /> */}
          </Container>
        )}
      </Content>
    );
  }
}

CreditCard.defaultProps = {
  helpUrl: 'https://cs.kohls.com/app/answers/detail/a_id/192/kw/order%20payment%20options',
  paymentTypeHelpUrl: 'https://cs.kohls.com/app/answers/detail/a_id/52',
  securityCode: {},
  expMonth: {},
  expYear: {},
  creditCard: {}
};

CreditCard.propTypes = {
  helpUrl: PropTypes.string,
  paymentTypeHelpUrl: PropTypes.string,
  securityCode: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }),
  expMonth: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }),
  expYear: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }),
  creditCard: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  })
};

export default CreditCard;
