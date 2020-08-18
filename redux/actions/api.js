import { createActions } from 'redux-actions';
import * as actionTypes from './action-types';
import { defaultAction } from '../../helpers';

export const {
  getData,
  setData,
  setError,
} = createActions({
  [actionTypes.GET_DATA]: defaultAction,
  [actionTypes.SET_DATA]: defaultAction,
  [actionTypes.SET_ERROR]: defaultAction,
});
