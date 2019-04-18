import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setPaymentInfo } from '../../actions/paymentInfoActions';
import CheckoutPayment from './CheckoutPayment';

function mapStateToProps(state) {
  return {
    initialPaymentInfo: state.paymentInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPaymentInfo: info => dispatch(setPaymentInfo(info))
  };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CheckoutPayment);
