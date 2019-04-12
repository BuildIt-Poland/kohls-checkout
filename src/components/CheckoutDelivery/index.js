import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setShippingAddress } from '../../actions/shippingAddressActions';
import CheckoutDelivery from './CheckoutDelivery';

function mapStateToProps(state) {
  return {
    initialAddress: state.shippingAddress
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAddress: address => dispatch(setShippingAddress(address))
  };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CheckoutDelivery);
