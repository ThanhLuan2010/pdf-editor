const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const UPDATE = 'UPDATE';

const defaultTypes = [REQUEST, SUCCESS, FAILURE, UPDATE];

function createRequestTypes(base, types = defaultTypes) {
  const res = {};
  types.forEach(type => (res[type] = `${base}_${type}`));
  return res;
}

export {REQUEST, SUCCESS, FAILURE, UPDATE};

export const APP = createRequestTypes('APP', [
  'START',
  'READY',
  'INIT',
  'SET_STACK_ROOT',
]);

// User Actions
export const USER_REGISTER = createRequestTypes('USER_REGISTER');

export const USER_LOGIN_LOCAL = createRequestTypes('USER_LOGIN_LOCAL');

export const USER_LOGOUT = 'USER_LOGOUT';

export const LIST_FILE = 'LIST_FILE'
export const ADD_FILE = 'ADD_FILE'
