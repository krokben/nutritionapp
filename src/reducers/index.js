import { combineReducers } from 'redux';
import rdiReducer from './rdiReducer';

const rootReducer = combineReducers({
  rdi: rdiReducer
});

export default rootReducer;
