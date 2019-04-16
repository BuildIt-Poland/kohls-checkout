import { connect } from 'react-redux';

import { refillDemoCart } from '../../actions/cartActions';
import Cart from './Cart';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

function mapDisaptchToProps(dispatch) {
  return {
    refillDemoCart: () => dispatch(refillDemoCart())
  };
}

export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(Cart);
