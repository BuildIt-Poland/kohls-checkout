import { connect } from 'react-redux';

import Cart from './Cart';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

export default connect(mapStateToProps)(Cart);
