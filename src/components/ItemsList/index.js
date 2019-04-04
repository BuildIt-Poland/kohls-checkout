import { connect } from 'react-redux';

import ItemsList from './ItemsList';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

export default connect(mapStateToProps)(ItemsList);
