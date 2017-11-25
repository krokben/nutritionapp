import { combineReducers } from 'redux';
import appReducer from './appReducer';
import rdiReducer from './rdiReducer';

const rootReducer = combineReducers({
  app: appReducer,
  rdi: rdiReducer
});

export default rootReducer;
