import * as types from '../actions/types';

const INITIAL = {
  data: [],
};

const fileReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case types.ADD_FILE:
      let _data;
      if (state.data.length === 0) {
        _data = action.data;
      } else {
        _data = state.data.concat(action.data);
      }
      return {
        ...state,
        data: _data,
      };
    default:
      return state;
  }
};

export default fileReducer;
