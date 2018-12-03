import { createActions } from 'redux-actions';
import * as actionTypes from './action-types';

const defaultAction = payload => payload;

export const {
  increment,
  decrement,
  setCounter,
} = createActions({
  [actionTypes.INCREMENT]: defaultAction,
  [actionTypes.DECREMENT]: defaultAction,
  [actionTypes.SET_COUNTER]: defaultAction,
});
