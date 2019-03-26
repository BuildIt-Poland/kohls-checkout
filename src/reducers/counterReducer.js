import { INCREASE_COUNT } from '../constants/actionTypes';

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default counterReducer;
