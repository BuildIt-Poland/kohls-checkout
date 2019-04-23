import { connect } from 'react-redux';

import PaymentMethod from './PaymentMethod';

function mapStateToProps(state) {
  return {
    paymentInfo: state.paymentInfo
  };
}

export default connect(mapStateToProps)(PaymentMethod);
