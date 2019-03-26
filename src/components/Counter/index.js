import { connect } from 'react-redux';

import { increaseCount } from '../../actions/counterActions';
import Counter from './Counter';

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: () => dispatch(increaseCount())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
