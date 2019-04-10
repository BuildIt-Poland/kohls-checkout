import { connect } from 'react-redux';

import CartIcon from './CartIcon';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

export default connect(mapStateToProps)(CartIcon);
