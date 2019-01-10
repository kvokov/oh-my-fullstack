import { combineEpics } from 'redux-observable';
import counter from './counter';
import api from './api';


export default combineEpics(
  counter,
  api,
);
