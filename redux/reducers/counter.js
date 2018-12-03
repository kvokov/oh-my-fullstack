import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/action-types';

const defaultState = Map({
  count: 0,
});

export default handleActions({
  [actionTypes.SET_COUNTER]: (state, { payload }) => state.set('count', payload),
}, defaultState);
