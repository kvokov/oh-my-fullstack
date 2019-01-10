import { combineReducers } from 'redux-immutable';
import counter from './counter';
import api from './api';

export default combineReducers({
  counter,
  api,
});
