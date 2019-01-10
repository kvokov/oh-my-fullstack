import { Map, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/action-types';

const defaultState = Map({
  isLoading: false,
  data: null,
  error: null,
});

export default handleActions({
  [actionTypes.GET_DATA]: state => state
    .set('isLoading', true),
  [actionTypes.SET_DATA]: (state, { payload }) => state
    .set('isLoading', false)
    .set('data', fromJS(payload))
    .set('error', null),
  [actionTypes.SET_ERROR]: (state, { payload }) => state
    .set('isLoading', false)
    .set('data', null)
    .set('error', fromJS(payload)),
}, defaultState);
