import { connect } from 'react-redux';

import BillingAddress from './BillingAddress';

function mapStateToProps(state) {
  return {
    address: state.shippingAddress
  };
}

export default connect(mapStateToProps)(BillingAddress);
