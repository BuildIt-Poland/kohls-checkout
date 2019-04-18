import { connect } from 'react-redux';

import AddressDetails from './AddressDetails';

function mapStateToProps(state) {
  return {
    address: state.shippingAddress
  };
}

export default connect(mapStateToProps)(AddressDetails);
