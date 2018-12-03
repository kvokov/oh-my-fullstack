import { combineEpics } from 'redux-observable';
import counter from './counter';


export default combineEpics(
  counter,
);
