import { connect } from 'react-redux';

import OrderSummary from './OrderSummary';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

export default connect(mapStateToProps)(OrderSummary);
