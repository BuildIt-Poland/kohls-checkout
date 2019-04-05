import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shipping from '../Icons/Shipping';
import Text from '../Text';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Message = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
`;

const ArrivalDates = styled.span`
  font-weight: bold;
`;

const ShippingDetails = ({ minDate, maxDate, shippingPromo }) => (
  <Wrapper>
    <Shipping />
    <Message>
      <Text>Ship to Me</Text>
      <span>Arrives </span>
      <ArrivalDates>{`${minDate} - ${maxDate}`}</ArrivalDates>
      {shippingPromo && <Text>{shippingPromo}</Text>}
    </Message>
  </Wrapper>
);

ShippingDetails.propTypes = {
  minDate: PropTypes.string.isRequired,
  maxDate: PropTypes.string.isRequired,
  shippingPromo: PropTypes.string
};

export default ShippingDetails;
