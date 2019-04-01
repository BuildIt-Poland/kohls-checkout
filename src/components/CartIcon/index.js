import { connect } from 'react-redux';

import CartIcon from './CartIcon';

function mapStateToProps(state) {
  return {
    count: state.cart.items.length
  };
}

export default connect(mapStateToProps)(CartIcon);
