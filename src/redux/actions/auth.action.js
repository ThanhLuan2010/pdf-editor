import * as types from './types';

//auth
export function register(params, onComplete, method) {
  return {
    type: types.USER_REGISTER[types.REQUEST],
    params,
    onComplete,
    method,
  };
}
export function loginLocal(params, onComplete, method) {
  return {
    type: types.USER_LOGIN_LOCAL[types.REQUEST],
    params,
    onComplete,
    method,
  };
}

export function logout() {
  return {
    type: types.USER_LOGOUT,
  };
}
