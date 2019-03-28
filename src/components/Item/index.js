import { connect } from 'react-redux';
import Item from './Item';

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(Item);
