import {combineReducers} from 'redux';
// import auth from './auth.reducer';
// import product from './product.reducer';
import fileReducer from './fileReducer'

const rootReducer = combineReducers({
  fileReducer,
  // product,
});

export default rootReducer;
