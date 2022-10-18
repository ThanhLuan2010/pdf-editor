import * as types from '../actions/types';
import {safeGet} from '../../utils/common';
// import {setRoot} from '../../utils/navigator';

const INITIAL = {
  loginMethod: null,
  loggedIn: false,
  userId: null,
  user: null,
  token: null,
  isError: false,
  error: null,
  isLoading: false,
};

const authReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case types.USER_LOGIN_LOCAL[types.REQUEST]:
    case types.USER_REGISTER[types.REQUEST]:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_LOGIN_LOCAL[types.SUCCESS]:
      // case types.USER_REGISTER[types.SUCCESS]:
      return {
        ...state,
        loggedIn: true,
        userId: safeGet(['data', 'data', 'userID'], action),
        token: safeGet(['data', 'data', 'Bearer'], action),
        user: safeGet(['data', 'data'], action),
        loginMethod: 'email',
      };
    case types.USER_LOGIN_LOCAL[types.FAILURE]:
    case types.USER_REGISTER[types.FAILURE]:
      return {
        ...state,
        loggedIn: false,
      };
    case types.USER_LOGOUT:
      // setRoot('LoginView');
      return INITIAL;
    default:
      return state;
  }
};

export default authReducer;
